/* Write a program to build a `Pyramid of stars` of given height */

const getLeadingSpaces = (pyramidSize) => {
    let leadingSpaces = "";
    for(let i=0;i<pyramidSize;i++){
        leadingSpaces = leadingSpaces + " ";
    }
    return leadingSpaces;
};

const getStars = (pyramidSize) => {
    let stars = " ";
    for(let i=0;i<pyramidSize;i++){
        stars = stars + "* ";
    }
    return stars;
};

const buildPyramid = (pyramidSize) => {
    let pyramid = "";
    for(let i=1;i<pyramidSize+1;i++){
        pyramid = pyramid + getLeadingSpaces(pyramidSize-i)+getStars(i)+" \n";
    }
    return pyramid;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;