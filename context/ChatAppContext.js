import React, { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";

// internal import
import {
  CheckIfWalletConnected,
  connectWallet,
  connectingWithContract,
} from "@/utils/api";

export const ChatAppContext = createContext();

export const ChatAppProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [userName, setUserName] = useState("");
  const [friendLists, setFriendLists] = useState([]);
  const [friendMsg, setFriendMsg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userLists, setUserLists] = useState([]);
  const [error, setError] = useState("");

  console.log("account:", account);
  console.log("userName:", userName);

  // chat user data
  const [currentUserData, setCurrentUserData] = useState("");
  const [currentUserAddress, setCurrentUserAddress] = useState("");

  const router = useRouter();

  // fetch data time of page load
  const fetchData = async () => {
    try {
      //get contract
      const contract = await connectingWithContract();
      //get account
      const connectAccount = await connectWallet();
      setAccount(connectAccount);
      //get username
      const username = await contract.getUsername(connectAccount);
      setUserName(username);
      // get friend list
      const friendLists = await contract.getMyFriendList(connectAccount);
      setFriendLists(friendLists);
      // get all app user
      const userList = await contract.getAllAppUsers();
      setUserLists(userList);
    } catch (err) {
      setError("Please Install And Connect Your Wallet");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // read message
  const readMessage = async (friendAddress) => {
    try {
      const contract = await connectingWithContract();
      const read = await contract.readMessage(friendAddress);
      setFriendMsg(read);
    } catch (err) {
      console.log(err);
      setError("Currently you have no message");
    }
  };

  // create account
  const createAccount = async ({ name, accountAddress }) => {
    try {
      if (name || accountAddress)
        return setError("Name and AccountAddress,cannot be empty");
      const contract = await connectingWithContract();
      const getCreateUser = await contract.createAccount(name);
      setLoading(true);
      await getCreateUser.await();
      setLoading(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
      setError("Error while creating your account please reload browser");
    }
  };

  // add your friends
  const addFriends = async ({ name, accountAddress }) => {
    try {
      if (name || accountAddress) return setError("Please provide data");
      const contract = await connectingWithContract();
      const addMyFriend = await contract.addFriend(accountAddress, name);
      setLoading(true);
      await addMyFriend.await();
      setLoading(false);
      router.push("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
      setError("Something went wrong while adding friends, try again");
    }
  };

  // send message to your friend
  const sendMessage = async ({ msg, address }) => {
    try {
      if (msg || address) return setError("Please type your message");
      const contract = await connectingWithContract();
      const addMessage = await contract.sendMessage(address, msg);
      setLoading(true);
      await addMessage.wait();
      setLoading(false);
      window.location.reload();
    } catch (err) {
      setError("Please reload browser and try again");
    }
  };

  // read info
  const readUser = async (userAddress) => {
    const contract = await connectingWithContract();
    const userName = await contract.getUsername(userAddress);
    setCurrentUserData(userName);
    setCurrentUserAddress(userAddress);
  };

  return (
    <ChatAppContext.Provider
      value={{
        readMessage,
        createAccount,
        addFriends,
        sendMessage,
        readUser,
        CheckIfWalletConnected,
        connectWallet,
        account,
        userName,
        friendLists,
        friendMsg,
        loading,
        userLists,
        error,
        currentUserData,
        currentUserAddress,
      }}
    >
      {children}
    </ChatAppContext.Provider>
  );
};
