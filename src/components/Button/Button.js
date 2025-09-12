import styles from './Button.module.scss';

const Button = ({ children, className, loading, disabled, ...rest }) => {

  let buttonClassName = styles.button;

  if (className ) {
    buttonClassName = `${buttonClassName} ${className}`;
  }

  if (loading) {
    buttonClassName = `${buttonClassName} ${styles.loading}`;
  }

  return (
    <button 
      {...rest} 
      className={buttonClassName}
      disabled={disabled || loading}
    >
      <span className={loading ? styles.hiddenText : ''}>
        {children}
      </span>
      {loading && (
        <span className={styles.spinner}>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeDasharray="31.416" 
              strokeDashoffset="31.416"
            >
              <animate 
                attributeName="stroke-dasharray" 
                dur="2s" 
                values="0 31.416;15.708 15.708;0 31.416;0 31.416" 
                repeatCount="indefinite"
              />
              <animate 
                attributeName="stroke-dashoffset" 
                dur="2s" 
                values="0;-15.708;-31.416;-31.416" 
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </span>
      )}
    </button>
  )
}

export default Button;