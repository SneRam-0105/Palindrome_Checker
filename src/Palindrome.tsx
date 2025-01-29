import { useState } from "react";
import { TextField, Card, CardContent, Typography, Button } from "@mui/material";


export default function PalindromeChecker() {
    const [text, setText] = useState("");
    const [isPalindrome, setIsPalindrome] = useState < boolean | null > (null);
    const[result, setResult] = useState < boolean  > (false);

    const checkPalindrome = (input: string) => {
        if (!input) {
            return;
        }
        const inputWord = input.toLowerCase().replace(/[^a-z0-9]/g, "");
        setIsPalindrome(inputWord === inputWord.split('').reverse().join(''));
        setResult(true);
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
                setResult(false);
                // checkPalindrome(e.target.value);
              }}
              style={{ marginBottom: "20px" }}
            />
               <Button onClick={() => checkPalindrome(text)}>Check</Button> 

               
            {result && (
              <Typography variant="h5" color={isPalindrome ? "green" : "red"}>
                {isPalindrome ? "✅ It's a palindrome!" : "❌ Not a palindrome!"}
              </Typography>
            )}
           

              <Card style={{ padding: "40px", maxWidth: "400px", textAlign: "center" }}> 
                <CardContent>
                    <Typography variant="h6" color="black"gutterBottom> Funny Note!! </Typography>
                    <Typography variant="h6" fontSize="1rem"color="darkblue"gutterBottom>
                    The Finnish word for “soapstone vendor” is supposedly the longest palindrome in everyday use: saippuakivikauppias. (What do you mean you don’t have a trusted soapstone vendor?)
                    </Typography>
                    </CardContent>
                    </Card>
            <Typography marginTop={"10px"}>Copyright © Sneha Ramalingam 2025</Typography>
            
          </CardContent>
        </Card>
      </div>
    );
}
