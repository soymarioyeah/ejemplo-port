{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", function() \{\
    const images = document.querySelectorAll(".mosaic-image");\
    const popup = document.getElementById("popup");\
    const popupImg = document.getElementById("popup-img");\
    const popupText = document.getElementById("popup-text");\
    const close = document.querySelector(".close");\
\
    images.forEach(image => \{\
        image.addEventListener("click", function() \{\
            popup.style.display = "block";\
            popupImg.src = this.src;\
            popupText.textContent = "Texto ejemplo justificado a la izquierda"; // Puedes cambiar este texto si lo deseas\
        \});\
    \});\
\
    close.addEventListener("click", function() \{\
        popup.style.display = "none";\
    \});\
\
    popup.addEventListener("click", function(event) \{\
        if (event.target == popup) \{\
            popup.style.display = "none";\
        \}\
    \});\
\});\
}