import CoinsClient from "@/app/components/CoinsClient";



export default async function Home() {
    return (
        <div className={'flex flex-col items-center justify-center mt-10'}>
            <CoinsClient/>
        </div>

    );
}
