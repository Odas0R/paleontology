## Paleontology

Paleontology is a project made to an optional class (you're
obligated to choose a different class) at college. It is a
social network where you can share fossils, but lacking most
features, only had 4 days to develop it.


## Generate SSL CA

Create the SSL key:

```bash
openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365

openssl rsa -in keytmp.pem -out key.pem
```

Add the certificate to your PC:

1. Open https://<lan_ip_address>:3000/cert in Google Chrome
   and you'll see that it's not secure. Yet!
2. In Developer Tools > Security > View Certificate: Drag
   image to your desktop and double click it.
3. Click 'Add'
4. Find it in Keychain Access and double click it
5. Expand 'Trust' and change 'When using this certificate' to
   'Always trust'.
6. You may be prompted to authenticate.
7. Restart your server.
8. Refresh your browser.


## TODOS

- [x] Fix Event Stack UI
- [x] Event Page
- [x] Tags on the first page
- [x] Services connected to the DB
- [x] Event Form (Add, Remove, Edit)
- [ ] Bucket (images)
