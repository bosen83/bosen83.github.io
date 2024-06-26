// 导入js文件
document.write(
	// jQuery
	'<script src="js/extend/jquery.js"></script>',
	// 导航列表
	'<script src="js/import/list.js"></script>',
	// 搜索引擎
	'<script src="js/import/engine.js"></script>',
	// 按键监听
	'<script src="js/import/event.js"></script>',
	// 工具类
	'<script src="js/import/util.js"></script>',
	// Markdown 解析
	'<script src="js/extend/marked.js"></script>',
	'<script src="js/extend/highlight.js"></script>',		
	'<link href="css/extend/github.css" rel="stylesheet">',
	// Linux 命令列表
	'<script src="https://linux.cmsblogs.cn/js/dt.js"></script>',
);
// index文件需要最后导入
document.write(
	'<script src="js/index.js"></script>',
);