import { useState } from "react";
import { TextField, Card, CardContent, Typography } from "@mui/material";


export default function PalindromeChecker() {
    const [text, setText] = useState("");
    const [isPalindrome, setIsPalindrome] = useState < boolean | null > (null);

    const checkPalindrome = (input: string) => {
        const inputWord = input.toLowerCase().replace(/[^a-z0-9]/g, "");
        setIsPalindrome(inputWord === inputWord.split('').reverse().join(''));
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f5f5f5" }}>
        <Card style={{ padding: "40px", maxWidth: "600px", textAlign: "center" }}> 
          <CardContent>
            <Typography variant="h4" color="darkblue"gutterBottom>
              Is it a Palindrome?
            </Typography>
            <TextField
         
              fullWidth
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                checkPalindrome(e.target.value);
              }}
              style={{ marginBottom: "20px" }}
            />
            {text && (
              <Typography variant="h5" color={isPalindrome ? "green" : "red"}>
                {isPalindrome ? "✅ It's a palindrome!" : "❌ Not a palindrome!"}
              </Typography>
            )}
              {/* <Button onClick={() => checkPalindrome(text)}>Check</Button> */}


            
          </CardContent>
        </Card>
      </div>
    );
}
