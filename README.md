# warframe.market-api-example
An example on how to do authorized requests with the warframe.market API.

## Why?
I was unfamiliar with this and it took me ages to figure out. The documentation didn't really help and I couldn't find any good examples. If you're here you're probably in the same spot I was in. Have fun coding.

## Getting your token
1. Use your favorite browser (e.g. Firefox or Chrome)
2. Log into warframe.market (if you aren't already)
3. Pull up the developer console (ctrl + shift + i)
4. Navigate to the tab "Storage"
5. Click on the "Cookies" storage
6. Go the cookies for the warframe.market domain
7. Select the cookie called "JWT" (that stands for JSON Web Token)
8. Copy the value of the JWT cookie
9. Paste the value into token.json (needs to be a string)
