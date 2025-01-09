type Step = string;

interface StepColumnProps {
    steps: Step[];
    startIndex: number;
}

export const steps: Step[] = [
    "Pilih Layanan Jasa",
    "Pilih Produk",
    "Tekan Tombol Order",
    "Kirim Data di WhatsApp",
    "Admin Memproses",
    "Selesai",
];


const StepColumn = ({ steps, startIndex }: StepColumnProps) => {
    return (
        <div
            className={`flex flex-col items-start space-y-8`}
        >
            {steps.map((step, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-4">
                    <div className="w-9 h-9 sm:h-14 sm:w-14 flex justify-center items-center bg-[#3A6BAE] font-semibold text-[25px] text-white rounded-full">
                        {startIndex + index * 2}
                    </div>
                    <span className="text-[15px] sm:text-lg font-semibold text-gray-700 max-w-[125px] sm:max-w-none">{step}</span>
                </div>
            ))}
        </div>
    );
};

export default StepColumn;