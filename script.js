/* AI+Stata3.0 中文知识库 - 统一脚本文件 */

// 全局数据
const wikiData = {
    concepts: [
        { id: 'stata-basics', name: 'Stata基础', tags: ['基础', '入门'] },
        { id: 'data-management', name: '数据管理', tags: ['数据', '管理'] },
        { id: 'descriptive-statistics', name: '描述性统计', tags: ['统计', '描述'] },
        { id: 'linear-regression', name: '线性回归', tags: ['回归', 'OLS'] },
        { id: 'did', name: '双重差分法', tags: ['因果推断', 'DiD'] },
        { id: 'psm', name: '倾向得分匹配', tags: ['因果推断', 'PSM'] },
        { id: 'rdd', name: '断点回归设计', tags: ['因果推断', 'RDD'] }
    ],
    topics: [
        { id: 'stata-intro', name: 'Stata简介', description: '基础入门、命令语法、变量类型' },
        { id: 'data-management', name: '数据管理', description: '数据导入导出、变量操作、数据合并' },
        { id: 'linear-regression', name: '线性回归', description: 'OLS、IV、2SLS、GLM' },
        { id: 'panel-data', name: '面板数据分析', description: '固定效应、随机效应、动态面板' },
        { id: 'causal-inference', name: '因果推断方法', description: 'DiD、PSM、RD、SCM' },
        { id: 'programming', name: 'Stata编程基础', description: 'do文件、循环、程序、函数' },
        { id: 'tables-reporting', name: '表格与报告', description: '结果导出、表格制作、报告生成' },
        { id: 'machine-learning', name: '机器学习', description: 'Lasso、弹性网、决策树、随机森林' }
    ],
    rawFiles: [
        { id: '1-intro', name: 'Stata简介', description: '基础入门、命令语法', files: ['basics-getting-started.md'] },
        { id: '2-data', name: '数据管理', description: '数据导入导出、变量操作', files: ['basics-getting-started.md', 'data-import-export.md', 'data-management.md', 'data-manipulation.md', 'descriptive-statistics.md'] },
        { id: '6-ols', name: '线性回归', description: 'OLS、IV、GLM', files: ['linear-regression.md', 'tables-reporting.md'] },
        { id: '9-time', name: '时间序列', description: 'ARIMA、VAR、协整', files: ['time-series.md'] },
        { id: '10-panel', name: '面板数据', description: '固定效应、随机效应', files: ['panel-data.md'] },
        { id: '12-scm', name: '合成控制法', description: '合成控制、安慰剂检验', files: ['synth.md'] },
        { id: '13-psm', name: '倾向匹配得分', description: 'PSM、匹配算法', files: ['psmatch2.md'] },
        { id: '16-rd', name: '断点回归', description: 'RDD、带宽选择', files: ['rdrobust.md', 'regression-discontinuity.md'] },
        { id: '17-did', name: '双重差分', description: 'DiD、事件研究', files: ['difference-in-differences.md', 'did.md', 'event-study.md'] },
        { id: '18-sp', name: '空间分析', description: '空间计量、GIS', files: ['spatial-analysis.md'] },
        { id: '29-ml', name: '机器学习', description: 'Lasso、决策树', files: ['machine-learning.md'] },
        { id: '3-prog', name: '编程基础', description: 'do文件、循环', files: ['programming-basics.md'] }
    ]
};

// 初始化函数
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSidebar();
    initSmoothScroll();
    initScrollEffects();
    highlightCurrentPage();
    initSearch();
    initCopyCode();
    initMarkdownRendering();
});

// 初始化导航
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a, .nav-section a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// 初始化侧边栏
function initSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    // 移动端侧边栏切换
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.cssText = `
        display: none;
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 200;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: var(--radius-sm);
        padding: 0.5rem 1rem;
        cursor: pointer;
        font-size: 1.25rem;
    `;

    if (document.body) {
        document.body.appendChild(menuToggle);
    }

    // 响应式处理
    function handleResize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            if (sidebar) {
                sidebar.style.transform = 'translateX(-100%)';
                sidebar.style.transition = 'transform 0.3s ease';
            }
        } else {
            menuToggle.style.display = 'none';
            if (sidebar) {
                sidebar.style.transform = 'translateX(0)';
            }
        }
    }

    menuToggle.addEventListener('click', function() {
        if (sidebar) {
            const currentTransform = sidebar.style.transform;
            sidebar.style.transform = currentTransform === 'translateX(0px)' || currentTransform === 'translateX(0)'
                ? 'translateX(-100%)'
                : 'translateX(0)';
        }
    });

    window.addEventListener('resize', handleResize);
    handleResize();
}

// 初始化平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 初始化滚动效果
function initScrollEffects() {
    const pageHeader = document.querySelector('.page-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (pageHeader) {
            if (currentScroll > 50) {
                pageHeader.style.boxShadow = 'var(--shadow-md)';
            } else {
                pageHeader.style.boxShadow = 'var(--shadow-sm)';
            }
        }

        lastScroll = currentScroll;
    });
}

// 高亮当前页面
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a, .nav-section a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href === currentFile) {
            link.classList.add('active');
        }
    });
}

// 初始化搜索功能
function initSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '搜索概念、专题、文档...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        font-size: 0.9375rem;
        margin-bottom: 1.5rem;
        transition: all 0.2s ease;
    `;

    const sidebarContent = document.querySelector('.sidebar-content');
    if (sidebarContent) {
        sidebarContent.insertBefore(searchInput, sidebarContent.firstChild);
    }

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        filterContent(query);
    });
}

// 过滤内容
function filterContent(query) {
    if (!query) {
        document.querySelectorAll('.nav-section li').forEach(li => {
            li.style.display = '';
        });
        return;
    }

    document.querySelectorAll('.nav-section').forEach(section => {
        const items = section.querySelectorAll('li');
        let hasVisible = false;

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = '';
                hasVisible = true;
            } else {
                item.style.display = 'none';
            }
        });

        const sectionTitle = section.querySelector('h3');
        if (sectionTitle) {
            section.style.display = hasVisible ? '' : 'none';
        }
    });
}

// 获取URL参数
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// 加载Markdown内容
async function loadMarkdownContent(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error('文件加载失败');
        }
        const text = await response.text();
        return parseMarkdown(text);
    } catch (error) {
        console.error('加载Markdown失败:', error);
        return '<p>内容加载失败</p>';
    }
}

// 简单的Markdown解析
function parseMarkdown(text) {
    let html = text;

    // 标题
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // 粗体和斜体
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // 代码块
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

    // 行内代码
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // 链接
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // 列表
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');

    // 段落
    html = html.split('\n\n').map(p => {
        if (!p.trim()) return '';
        if (p.startsWith('<')) return p;
        return `<p>${p}</p>`;
    }).join('\n');

    return html;
}

// 复制代码功能
function initCopyCode() {
    document.querySelectorAll('pre').forEach(pre => {
        const button = document.createElement('button');
        button.textContent = '复制';
        button.className = 'copy-button';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: var(--radius-sm);
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s;
        `;

        pre.style.position = 'relative';
        pre.appendChild(button);

        pre.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });

        pre.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });

        button.addEventListener('click', () => {
            const code = pre.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    button.textContent = '已复制!';
                    setTimeout(() => {
                        button.textContent = '复制';
                    }, 2000);
                });
            }
        });
    });
}

// 统计数据
function getStats() {
    return {
        topics: wikiData.topics.length,
        concepts: wikiData.concepts.length,
        rawFiles: wikiData.rawFiles.length,
        totalWords: '400K+'
    };
}

// Markdown渲染初始化
function initMarkdownRendering() {
    const markdownElements = document.querySelectorAll('[data-markdown]');
    markdownElements.forEach(element => {
        const filePath = element.dataset.markdown;
        if (filePath) {
            // 在实际部署时可以加载真实的Markdown文件
            console.log('Markdown文件:', filePath);
        }
    });
}

// 页面加载动画
function addPageLoadAnimation() {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        mainContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 100);
    }
}

// 智能侧边栏滚动
function initSmartSidebarScroll() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (sidebar && mainContent) {
        mainContent.addEventListener('scroll', () => {
            const scrollY = mainContent.scrollTop;
            // 可以根据滚动位置调整侧边栏显示
        });
    }
}

// 键盘导航
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K 打开搜索
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }

        // Esc 关闭移动端菜单
        if (e.key === 'Escape') {
            const sidebar = document.querySelector('.sidebar');
            const menuToggle = document.querySelector('.menu-toggle');
            if (sidebar && menuToggle && window.innerWidth <= 768) {
                sidebar.style.transform = 'translateX(-100%)';
            }
        }
    });
}

// 打印友好样式
function initPrintSupport() {
    window.addEventListener('beforeprint', () => {
        document.body.classList.add('print-mode');
    });

    window.addEventListener('afterprint', () => {
        document.body.classList.remove('print-mode');
    });
}

// 统计数据显示
function initStatsDisplay() {
    const stats = getStats();
    const statElements = document.querySelectorAll('.stat-number');

    statElements.forEach((el, index) => {
        const keys = ['rawFiles', 'concepts', 'topics'];
        if (keys[index]) {
            animateNumber(el, stats[keys[index]]);
        }
    });
}

// 数字动画
function animateNumber(element, target) {
    const duration = 1000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // 使用缓动函数
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(start + (target - start) * easeOutQuart);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

// 保存阅读位置
function saveReadingPosition() {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        const pageKey = window.location.pathname;
        mainContent.addEventListener('scroll', () => {
            const position = mainContent.scrollTop;
            localStorage.setItem(`reading-${pageKey}`, position);
        });

        // 恢复位置
        const savedPosition = localStorage.getItem(`reading-${pageKey}`);
        if (savedPosition) {
            mainContent.scrollTop = parseInt(savedPosition);
        }
    }
}

// 目录高亮
function initTocHighlight() {
    const mainContent = document.querySelector('.main-content');
    const tocLinks = document.querySelectorAll('.sidebar-content a[href^="#"]');

    if (mainContent && tocLinks.length > 0) {
        const sections = Array.from(tocLinks).map(link => {
            const href = link.getAttribute('href');
            const section = document.querySelector(href);
            return { link, section };
        }).filter(item => item.section);

        mainContent.addEventListener('scroll', () => {
            let currentSection = null;

            sections.forEach(({ link, section }) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100) {
                    currentSection = link;
                }
            });

            tocLinks.forEach(link => link.classList.remove('active'));
            if (currentSection) {
                currentSection.classList.add('active');
            }
        });
    }
}

// 导出功能
function exportToMarkdown(content, filename) {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// 性能监控
function logPerformance() {
    if (window.performance) {
        window.addEventListener('load', () => {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log(`页面加载时间: ${loadTime}ms`);
        });
    }
}

// 错误处理
function initErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript错误:', e.error);
        // 可以添加用户友好的错误提示
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.error('未处理的Promise错误:', e.reason);
    });
}

// 初始化所有增强功能
(function initEnhancements() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            addPageLoadAnimation();
            initSmartSidebarScroll();
            initKeyboardNavigation();
            initPrintSupport();
            initTocHighlight();
            saveReadingPosition();
            logPerformance();
            initErrorHandling();
        });
    } else {
        addPageLoadAnimation();
        initSmartSidebarScroll();
        initKeyboardNavigation();
        initPrintSupport();
        initTocHighlight();
        saveReadingPosition();
        logPerformance();
        initErrorHandling();
    }
})();

console.log('✅ AI+Stata3.0 中文知识库 - 脚本加载完成');
