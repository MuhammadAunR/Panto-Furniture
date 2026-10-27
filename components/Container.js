export default function Container({ children, className = "" }) {
    return (
        <div className={`lg:w-11/12 lg:mx-auto px-5 md:px-10 lg:px-5 max-w-375 ${className}`}>
            {children}
        </div>
    )
}