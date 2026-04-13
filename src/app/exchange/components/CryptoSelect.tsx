'use client'

import {Coin} from "@/store/CoinsStore";
import {Controller} from "react-hook-form";
import Select from "react-select";


interface OptionType {
    value: Coin,
    label: any
}

interface Props {
    name: string;
    control: any;
    value: Coin | null;
    onChange: (coin: Coin) => void;
    options?: OptionType[];
}

const CryptoSelect = ({name, control, value, onChange, options}: Props) => {
    return (
        <Controller name={name} control={control} render={({field, fieldState}) => (
            <Select className={'min-w-[200px]'}
                    {...field}
                    options={options}
                    value={options?.find(option => option.value.id === value?.id)}
                    isSearchable={false}
                    onChange={(e) => {
                        if (e) {
                            onChange(e.value)
                            field.onChange(e.value)
                        }
                    }
                    }
                    instanceId="currency"/>
        )}></Controller>
    );
}
export default CryptoSelect;