
# HTML-Parser

## Table of Contents

* [Objective](#objective)
* [Dependencies](#dependencies)
* [User Flow](#user-flow)
* [Technologies](#technologies)

---

## Objective

- The `HTML-Parser` tool was designed with an overall goal of allowing others to scrape HTML code for websites.

- __WARNING!__ This tool is meant to be used purely for education purposes __ONLY__ and should not be used to scrape data from company websites who do not allow scraping of their websites or for malicious intent.

    - __THIS TOOL IS NOT LIABLE FOR ANY IP BANS OR LEGAL DOCUMENTS RECEIVED FROM COMPANIES BY THE USER OF THIS TOOL.__

- The tool was created using `Node.js` and takes `URLs` that are placed in the `urls.txt` file and will go to those websites, grab the `HTML` code for that route, and create a new base text file containing the `HTML` code received in the response. 

    - Additionally, the files created once the process has completed, will be named after the `host` of the domain pinged meaning that if you visit `https://www.google.com`, your text file will appear as `google.com`.

- For the purposes of the point above, I have provided a few safe `URLs` that you can use in the `urls.txt` file to see how the tool works first hand. This is all open source so if you have ideas for making this better, let me know!

* [Top](#table-of-contents)

---

## Dependencies

- `Node.js`
- `Axios`

* [Top](#table-of-contents)

---

## User Flow

- The dependencies above are all that the tool requires in order to be used successfully from your terminal.

    - __NOTE:__ This tool is terminal based so you'll be working from the `command line` / `terminal`.

- Once the dependencies neede are installed, the tool can be run using the command `node urls.js urls.txt`

- If there are any `URLs` that are invalid, you will see the follwing message in your terminal.

```
TERMINAL:
Couldn't download http://www.asdfskadjf.com
```

- It is important to note that invalid `URLs` will __NOT__ cause the application to stop and will read over to the next line within the file.

- Once the process has been completed, you will see new text based files appear in your directory which will be named the `URLs` hostname.

* [Top](#table-of-contents)

---

## Technologies

- `Javascript`
- `Node.js`
- `Axios`

* [Top](#table-of-contents)

---