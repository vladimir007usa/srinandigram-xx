import { PhoneInput as BasePhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { cn } from '@/lib/utils';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  id?: string;
}

const PhoneInput = ({
  value,
  onChange,
  className,
  placeholder,
  name,
  required,
  id,
}: PhoneInputProps) => {
  return (
    <div className={cn("phone-input-container", className)}>
      <BasePhoneInput
        defaultCountry="in"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputProps={{
          name,
          required,
          id,
          className: "w-full !px-4 !py-3 !bg-gray-50 !border !border-gray-200 !rounded-xl focus:!outline-none focus:!ring-2 focus:!ring-[#d5b474]/50 focus:!border-[#d5b474] !transition-all !h-auto !text-base !font-sans",
        }}
        countrySelectorStyleProps={{
          buttonClassName: "!bg-gray-50 !border !border-gray-200 !rounded-xl !mr-2 !px-3 !h-[50px] hover:!bg-gray-100",
          dropdownStyleProps: {
            className: "!bg-white !border !border-gray-200 !rounded-xl !shadow-xl !mt-2 !z-50",
          },
          flagClassName: "!w-6 !h-4",
        }}
        className="!w-full"
      />
      <style>{`
        .phone-input-container .react-international-phone-input-container {
          width: 100%;
          display: flex;
          align-items: center;
        }
        .phone-input-container .react-international-phone-input {
          flex: 1;
        }
        .phone-input-container .react-international-phone-country-selector-button {
          height: 100% !important;
          border-radius: 0.75rem !important;
        }
        /* Custom scrollbar for dropdown */
        .phone-input-container .react-international-phone-country-selector-dropdown::-webkit-scrollbar {
          width: 6px;
        }
        .phone-input-container .react-international-phone-country-selector-dropdown::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .phone-input-container .react-international-phone-country-selector-dropdown::-webkit-scrollbar-thumb {
          background: #d5b474;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export { PhoneInput };
