@echo off
echo.
echo ============================================
echo AI+Stata3.0 中文知识库页面创建脚本
echo ============================================
echo.

echo 正在检查Python安装...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误：未找到Python。请先安装Python 3.x
    echo.
    echo 下载地址：https://www.python.org/downloads/
    pause
    exit /b 1
)

echo Python已安装，正在安装依赖包...
pip install markdown --quiet >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误：无法安装markdown包
    echo 尝试使用备用源：
    pip install markdown -i https://pypi.tuna.tsinghua.edu.cn/simple --quiet
    if %errorlevel% neq 0 (
        echo 安装失败！
        pause
        exit /b 1
    )
)

echo 依赖包安装成功，开始创建页面...
echo.
python create_pages.py

echo.
echo ============================================
echo 所有页面创建完成！
echo ============================================
echo.
echo 输出目录：e:\Wiki-Obsidian\AIStata3.0Book\Book\
echo.

pause