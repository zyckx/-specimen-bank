import Top from "@/components/Top/Top";
import NavBar from "@/components/NavBar/NavBar";
import SearchBanner from "@/components/SearchBanner/SearchBanner";
import { Button } from "@radix-ui/themes";

export default function test() {
    return (
        <div className="h-full">
            <Top />
            <NavBar />
            <SearchBanner />
        </div>
    );
}
