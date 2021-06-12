const i = Number(process.argv[2]);

    if (i % 15 == 0)
        console.log("JavaScript");
    else if (i % 3 == 0)
        console.log("Java");
    else if (i % 5 == 0)
        console.log("Script");
    else
        console.log(i);
