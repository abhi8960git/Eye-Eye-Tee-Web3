import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import {
  ConnectEmbed,
  ConnectWallet,
  useShowConnectEmbed,
  darkTheme,
} from "@thirdweb-dev/react";

import { useMediaQuery } from "react-responsive";
import Connected from "../components/Connected";

const Home: NextPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const showConnectEmbbed = useShowConnectEmbed();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {showConnectEmbbed ? (
          <div className="w-full h-full flex  ">
            {/* {oneside} */}
            <div className=" bg-blue-600 pattern lg:w-[50%] w-full  flex flex-col justify-center items-center  gap-3">
              <div className="bg-black/10 lg:p-[9em] md:px-[8em] md:p-[4em] p-[2em] rounded-lg glassmorphism flex flex-col items-center justify-center gap-4  relative">
                {isBigScreen ? (
                  <>
                    <Image
                      src="/images/logo.png"
                      alt="eye_eye_tee_logo"
                      sizes="full"
                      width={400}
                      height={400}
                    />
                    <h1 className="text-5xl font-bold ">Eye Eye Tee</h1>
                    <p className="w-full h-[2px] bg-white w-[40%]"></p>
                    <p className="text-lg ">Welcome to our NFT Platform</p>
                  </>
                ) : (
                  <div className="flex  flex-col  gap-9 items-center justify-center">
                    <div className="flex flex-col gap-3">
                      <h1 className="text-5xl font-bold ">Eye Eye Tee</h1>
                      <p className="w-full h-[2px] bg-white w-[40%]"></p>
                      <p className="text-lg ">Welcome to our NFT Platform</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5">
                      <h1 className="text-xl font-bold">Login To Start </h1>
                      <ConnectEmbed showThirdwebBranding={false} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* other side  */}
            {isBigScreen && (
              <div className=" flex flex-col gap-4 text-black bg-black  w-[50%] flex justify-center items-center">
                <h1 className="text-xl font-bold">Login To Start </h1>
                <ConnectEmbed
                  theme={darkTheme({
                    colors: {
                      modalBg: "000000",
                      // dropdownBg: "000000",
                      accentText: "#2cc39e",
                    },
                  })}
                  showThirdwebBranding={false}
                />
              </div>
            )}
          </div>
        ) : (
          <Connected />
        )}
      </div>
    </main>
  );
};

export default Home;
