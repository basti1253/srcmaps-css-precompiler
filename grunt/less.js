module.exports = {
    all: {
        options: {
            sourceMap : true,
            sourceMapFilename : 'css/raw/style.css.map',
            sourceMapRootpath : '../../',
            sourceMapBasepath : '<%=srcDir%>',
            sourceMapURL : 'style.css.map',
            compress : true
        },
        files: {
            '<%=srcDir%>/css/raw/style.css': '<%=srcDir%>/less/style.less'
        }
    }
};
