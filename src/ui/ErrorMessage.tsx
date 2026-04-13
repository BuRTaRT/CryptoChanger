interface Props {
    message: string | undefined
}

const ErrorMessage = function ({message}: Props) {
    if (!message) return null;
    return (
        <p className={'text-red-500 absolute top-[40px] '}>{message}</p>
    )
        ;
}
export default ErrorMessage;