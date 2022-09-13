enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (mediaName == 'forbes' || mediaName == 'Outlook')
        return PrintMedia.Magazine;
    return 0
}

let mediaType: PrintMedia = getMedia('forbes');
console.log(mediaType);



