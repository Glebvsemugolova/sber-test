export type FormFieldType = 'Text Field' | 'Text Area' | 'Date / Time'

export interface FormField {
    name: string;
    type: FormFieldType
}

export interface FormFieldMenuItem {
    type: FormFieldType
    icon?: JSX.Element
}
