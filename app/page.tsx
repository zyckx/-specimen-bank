import Top from "@/components/Top/Top";
import NavBar from "@/components/NavBar/NavBar";
import SearchBanner from "@/components/SearchBanner/SearchBanner";

export default function Home() {
    return (
        <>
            <header className="header">
                <div className="top">
                    <Top />
                </div>
                <div className="nav">
                    <NavBar />
                </div>
            </header>
            <main className="main">
                <SearchBanner />
            </main>
            <footer></footer>
        </>
    );
}
