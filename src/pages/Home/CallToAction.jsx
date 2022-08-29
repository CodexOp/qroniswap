import React from "react";
import styled from "styled-components";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const BSCchainTestnet = {
  id: 97,
  name: "BSC - Testnet",
  network: "BSC",
  iconUrl: "https://example.com/icon.svg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Binance Smart Chain – Testnet",
    symbol: "BNB",
  },
  rpcUrls: {
    default: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://testnet.bscscan.com" },
    etherscan: { name: "SnowTrace", url: "https://testnet.bscscan.com" },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [
    BSCchainTestnet,
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Qroniswap",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const CallToAction = () => {
  const CallActionWrapper = styled.section`
    margin-bottom: var(--call-to-action-margin, 100px);

    .call-to-action-padding {
      padding: var(--call-to-action-padding, 30px);

      @media (min-width: 991px) {
        --call-to-action-padding: 65px;
      }
    }
  `;
  const BoxContent = styled.div`
    h4 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 0px;

      @media (min-width: 991px) {
        font-size: 30px;
      }
    }
  `;
  const ButtonGroup = styled.div`
    display: flex;
    gap: 15px;
    @media (min-width: 991px) {
      justify-content: flex-end;
    }
    @media (max-width: 777px) {
      flex-direction: column-reverse;
    }
  `;
  return (
    <CallActionWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="gr-primary call-to-action-padding rounded-4">
              <div className="row gy-4">
                <div className="col-xl col-lg-6">
                  <BoxContent>
                    <h4 className="h3 mb-2">Welcome Home to DeFi</h4>
                    <p className="fs-20 mb-0">
                      Join other startups already growing with Qroni.
                    </p>
                  </BoxContent>
                </div>
                <div className="col-xl-auto col-lg-6">
                  <ButtonGroup>
                    <a
                      target="_blank"
                      href="https://medium.com/@qroniswap"
                      className="btn btn-sm btn-light"
                    >
                      Learn more
                    </a>
                    <WagmiConfig client={wagmiClient}>
                      <RainbowKitProvider
                        chains={chains}
                        initialChain={BSCchainTestnet}
                      >
                        <ConnectButton />
                      </RainbowKitProvider>
                    </WagmiConfig>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CallActionWrapper>
  );
};

export default CallToAction;
