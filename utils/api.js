import { ChatAppAddress, ChatAppABI } from "@/context/constants";
import { Contract } from "ethers";
import { useConnect } from "wagmi";

export const CheckIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask!");
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = accounts[0];
    return firstAccount;
  } catch (err) {
    console.log(err);
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask!");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const firstAccount = accounts[0];
    return firstAccount;
  } catch (err) {
    console.log(err);
  }
};

export const fetchContract = (signerProvider) => {
  return new Contract(ChatAppAddress, ChatAppABI, signerProvider);
};

export const connectingWithContract = async () => {
  const { connect } = useConnect();
  try {
    const provider = new ethers.BrowserProvider(connect);
    const signer = await provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (err) {
    console.log(err);
  }
};

export const convertTime = (time) => {
  const newTime = new Date(time.toNumber());

  const realTime =
    newTime.getHours() +
    ":" +
    newTime.getMinutes() +
    ":" +
    newTime.getSeconds() +
    "-" +
    newTime.getDate() +
    "/" +
    (newTime.getMonth() + 1) +
    "/" +
    newTime.getFullYear();

  return realTime;
};
