Yes We Can
----------

Awesome visualization of **ALL** the browser support data from [caniuse.com](http://caniuse.com).

## But Why?
I like Can I Use, but I usually don't need all the detail it provides on individual features. Most of the time, all I care about is whether the latest version of every browser at least partially supports a given feature. Also, I don't want to open a new tab for every single feature when I only need so little of the information from each page.

Thus, behold the awesomeness of [Yes We Can](http://tobiasbernard.com/yeswecan/). It has all the browser support info I need 99% of the time, and is instantly searchable using the revolutionary CTRL+F technology.

Other advantages:
* sick information density
* works on pretty much any screensize
* additional details on features and browsers in tooltips
* click a feature's name to open its Can I Use page

## Data
The visualization is dynamically generated in the browser, using the data in `features.json` and `meta.json`. To generate or update the two files, you need to clone [fyrd/caniuse](https://github.com/fyrd/caniuse) in the root directory of the project.
```
git clone https://github.com/fyrd/caniuse
```
After that, you can just run the `data.js` script, which will use the data in the cloned repository to generate the two files, or overwrite them if they already exist.
```
node data.js
```
And that's it. Now the visualization should be up to date with the latest browser support data.

Unfortunately, since the site is running on Github Pages, there's no way (to my knowledge) to automatically update the data. I'm updating it manually every once in a while, but should I forget, feel free to ping me or create an issue.
