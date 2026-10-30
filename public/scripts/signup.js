const endpoint = 'https://mailtik.spacejelly.dev/api/forms/cfp-template';
const banner = document.querySelector('[data-form-banner]');
const bannerMessage = banner?.querySelector('[data-banner-message]');

function showBanner(type, message) {
  if (!banner) return;

  banner.className = `${banner.className.split(' ')[0]} ${type === 'success' ? banner.dataset.successClass : banner.dataset.errorClass}`;
  if (bannerMessage) bannerMessage.textContent = message;
  banner.hidden = false;
}

const params = new URLSearchParams(window.location.search);
if (params.get('status') === 'success') {
  showBanner('success', 'Check your inbox for a download link!');
} else if (params.get('status') === 'error') {
  showBanner('error', 'Something went wrong. Please try again.');
}

for (const form of document.querySelectorAll('[data-signup-form]')) {
  form.action = endpoint;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const button = form.querySelector('button[type="submit"]');
    const label = button?.querySelector('[data-submit-label]');
    const spinner = button?.querySelector('[data-submit-spinner]');
    const formData = new FormData(form);

    if (button) {
      button.disabled = true;
      button.classList.add(button.dataset.loadingClass);
      button.setAttribute('aria-busy', 'true');
    }
    if (label) label.classList.add(label.dataset.hiddenTextClass);
    if (spinner) spinner.hidden = false;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const result = await response.json();

      if (!result.success) throw new Error('Form submission error');

      const redirectUrl = result.redirectUrl || formData.get('redirect') || 'https://cfptemplate.com';
      if (result.redirectUrl) {
        window.location.href = result.redirectUrl;
      } else {
        window.location.href = `${redirectUrl}?status=success&message=Verification+email+sent+successfully`;
      }
    } catch {
      showBanner('error', 'Something went wrong. Please try again.');
      if (button) {
        button.disabled = false;
        button.classList.remove(button.dataset.loadingClass);
        button.removeAttribute('aria-busy');
      }
      if (label) label.classList.remove(label.dataset.hiddenTextClass);
      if (spinner) spinner.hidden = true;
    }
  });
}
