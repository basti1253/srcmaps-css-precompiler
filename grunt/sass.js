module.exports = {
    all: {
        options: {
            sourcemap : 'auto',
            style : 'compressed'
        },
        files: {
            '<%=srcDir%>/css/raw/style.css': '<%=srcDir%>/scss/style.scss'
        }
    }
};
