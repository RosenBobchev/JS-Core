function solve(input) {
    let regex = /(<[\/\w]+>)/gm;
    let result = [];
    input.forEach(x => {
        let temp = x.replace(regex, '');
        result.push(temp);
    });


    console.log(result.join(' '));
}

solve(['<div><p>This</p> is</div>',
    '<div><a>perfectly</a></div>',
    '<divs><p>valid</p></divs>',
    '<div><p>This</div></p>',
    '<div><p>is not</p><div>']);