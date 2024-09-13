let paragraphs = document.getElementsByClassName('par');
let years = document.getElementsByClassName('year');
let progress = document.getElementsByClassName('progress');
let screenWidth = window.innerWidth;
let icons_div = document.querySelector('.icons');
let id;

[...paragraphs].forEach((paragraph, index) => {
    if (index != 0) {
        paragraph.style.display = 'none';
    };
});

[...years].forEach((year, index) => {
    if (index) {
        year.style.display = 'none';
    };
});

[...progress].forEach((prog, index) => {
    if (index == 0) {
        prog.classList.add('pressed');
    }
});

if (screenWidth > 500) {
    icons_div.style.display = 'none';
} else {
    icons_div.style.display = 'flex';
    [...progress].forEach((prog, id) => {
        if (id > 4) {
            prog.style.display = 'none';
        }
    });
}

function showParagraph(paragraphNumber) {
    id = paragraphNumber;

    [...paragraphs].forEach((paragraph) => {
            paragraph.style.display = 'none';
    });

    [...years].forEach((year) => {
            year.style.display = 'none';
    });

    [...progress].forEach((prog) => {
        prog.classList.remove('pressed');
    });

    let selectedDiv = document.querySelector('.progress' + paragraphNumber);
    let selectedParagraph = document.querySelector('.par' + paragraphNumber);
    if (selectedParagraph) {
      selectedParagraph.style.display = 'block';
      selectedDiv.classList.add('pressed');
    }

    let selectedyear = document.querySelector('.year' + paragraphNumber);
    if (selectedyear) {
      selectedyear.style.display = 'block';
    }
}

// divElement.addEventListener('mouseenter', function() {
// //   if (!this.classList.contains('pressed')) {
// //     this.style.backgroundColor = 'red';
// //   }
// });


// divElement.addEventListener('mouseleave', function() {
//   // Change background color back to original when mouse leaves, unless the button is pressed
// //   if (!this.classList.contains('pressed')) {
// //     this.style.backgroundColor = 'blue';
// //   }
// });

window.addEventListener('resize', () => {
    let screenWidth = window.innerWidth;
    [...progress].forEach((prog) => {
        if (prog.style.display == 'none') {
            prog.style.display = 'block';
        }
    });
    if (screenWidth > 500) {
        icons_div.style.display = 'none';
    } else {
        icons_div.style.display = 'flex';
        if (id && id >= 3 && id <= 9) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 2) || (index + 1) > (id + 2)) {
                    prog.style.display = 'none';
                }
            });
        } else if (id && id == 10) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 3) || (index + 1) > (id + 1)) {
                    prog.style.display = 'none';
                }
            });
        } else if (id && id == 11) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 4)) {
                    prog.style.display = 'none';
                }
            });
        }  else if (id && id == 1) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) > (id + 4)) {
                    prog.style.display = 'none';
                }
            });
        }  else if (id && id == 2) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 1) || (index + 1) > (id + 3)) {
                    prog.style.display = 'none';
                }
            });
        } 
    }
});

function onRightClick() {
    if (!id) {
        id = 2;
    }
    else if(id < 11) {
        id += 1;
    }

    [...paragraphs].forEach((paragraph) => {
            paragraph.style.display = 'none';
    });

    [...years].forEach((year) => {
            year.style.display = 'none';
    });

    [...progress].forEach((prog) => {
        prog.classList.remove('pressed');
    });

    let selectedDiv = document.querySelector('.progress' + id);
    let selectedParagraph = document.querySelector('.par' + id);
    if (selectedParagraph) {
      selectedParagraph.style.display = 'block';
      selectedDiv.classList.add('pressed');
    }

    let selectedyear = document.querySelector('.year' + id);
    if (selectedyear) {
      selectedyear.style.display = 'block';
    }


    [...progress].forEach((prog) => {
        if (prog.style.display == 'none') {
            prog.style.display = 'block';
        }
    });

    if (screenWidth <= 500) {
        if (id && id >= 3 && id <= 9) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 2) || (index + 1) > (id + 2)) {
                    prog.style.display = 'none';
                }
            });
        } else if (id && id == 10) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 3) || (index + 1) > (id + 1)) {
                    prog.style.display = 'none';
                }
            });
        } else if (id && id == 11) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 4)) {
                    prog.style.display = 'none';
                }
            });
        }  else if (id && id == 1) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) > (id + 4)) {
                    prog.style.display = 'none';
                }
            });
        }  else if (id && id == 2) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 1) || (index + 1) > (id + 3)) {
                    prog.style.display = 'none';
                }
            });
        } 
    }
};

function onLeftClick() {
    if (!id) {
        id = 11;
    }
    else if(id > 1) {
        id -= 1;
    }

    [...paragraphs].forEach((paragraph) => {
            paragraph.style.display = 'none';
    });

    [...years].forEach((year) => {
            year.style.display = 'none';
    });

    [...progress].forEach((prog) => {
        prog.classList.remove('pressed');
    });

    let selectedDiv = document.querySelector('.progress' + id);
    let selectedParagraph = document.querySelector('.par' + id);
    if (selectedParagraph) {
      selectedParagraph.style.display = 'block';
      selectedDiv.classList.add('pressed');
    }

    let selectedYear = document.querySelector('.year' + id);
    if (selectedYear) {
      selectedYear.style.display = 'block';
    }



    [...progress].forEach((prog) => {
        if (prog.style.display == 'none') {
            prog.style.display = 'block';
        }
    });

    if (screenWidth <= 500) {
        if (id && id >= 3 && id <= 9) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 2) || (index + 1) > (id + 2)) {
                    prog.style.display = 'none';
                }
            });
        } else if (id && id == 10) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 3) || (index + 1) > (id + 1)) {
                    prog.style.display = 'none';
                }
            });
        } else if (id && id == 11) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 4)) {
                    prog.style.display = 'none';
                }
            });
        }  else if (id && id == 1) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) > (id + 4)) {
                    prog.style.display = 'none';
                }
            });
        }  else if (id && id == 2) {
            [...progress].forEach((prog, index) => {
                console.log(id,(id - 2),(id + 2), index);
                if ((index + 1) < (id - 1) || (index + 1) > (id + 3)) {
                    prog.style.display = 'none';
                }
            });
        } 
    }
};