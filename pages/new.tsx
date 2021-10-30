import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useInput, useText } from "../src/hooks/useTextInput";
import styles from "../styles/Home.module.css";
import { postArticle } from "./api/create";

const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [sending, setSending] = useState(false);

  const [message, setMessage] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>
          タイトル:
          <input onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>本文</p>
        <div>
          <textarea onChange={(e) => setBody(e.target.value)} />
        </div>

        <button
          disabled={sending}
          onClick={async () => {
            setSending(true);
            try {
              await postArticle(title, body);
              setBody("");
              setTitle("");

              setMessage("送信完了");
              setTimeout(() => {
                setMessage("");
              }, 5000);
            } catch (e) {
              setMessage(JSON.stringify(e));
            } finally {
              setSending(false);
            }
          }}
        >
          送信
        </button>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default NewArticle;
