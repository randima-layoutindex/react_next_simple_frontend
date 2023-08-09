import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState,useEffect } from 'react'
import io,{Socket} from "socket.io-client"
import Message from '@/components/Message'
import MessageInput from '@/components/MessageInput'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [socket,setSocket] = useState()
  const [messages,setMessages] = useState()

  useEffect(()=>{

    const newSocket =io("http://localhost:8081")
    setSocket(newSocket)
  },[setSocket])
  const messageListner = (message)=>{
    setMessages([...messages,message])
  }

  useEffect(()=>{
socket?.on("message",messageListner)
return ()=>{socket?.off("message",messageListner)}
  },[])
  const send = (value)=>{
    socket?.emit("message",value)

  }
  return (
    <>
    <MessageInput/>
    <Message/>
    </>
  )
}
