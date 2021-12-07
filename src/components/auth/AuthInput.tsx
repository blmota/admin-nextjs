interface AuthInputProps {
    label: string,
    type?: string,
    value: any,
    placeholder?: string,
    valueChange: (value: any) => void,
    required?: boolean
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className={`flex flex-col mb-4`}>
            <label className={`font-light`}>{props.label}</label>
            <input type={props.type ?? 'text'} 
                value={props.value}
                placeholder={props.placeholder}
                required={props.required}
                onChange={e => props.valueChange?.(e.target.value)}
                className={`w-full px-4 py-3 
                rounded-lg bg-gray-200 mt-2
                border focus:border-blue-500
                focus:outline-none focus:bg-white`}
            />
        </div>
    )
}