#!/bin/bash

# 设置要生成或删除文件的目录
output_dir="."  # 替换为你的目标目录

# 确保目标目录存在
mkdir -p "$output_dir"

# 检查传递的参数
if [[ $# -ne 1 ]]; then
  echo "用法: $0 [generate|delete]"
  exit 1
fi

# 根据参数执行相应的操作
case "$1" in
  generate)
    # 循环生成文件
    for id1 in {1..2}; do
      for id2 in {1..8}; do
        filename="chapter_${id1}_section_${id2}.html"
        filepath="${output_dir}/${filename}"
        
        # 创建文件并写入内容
        echo "<h2>插入的内容</h2>" > "$filepath"
        echo "<p>第${id1}章第${id2}节</p>" >> "$filepath"
        
        echo "生成文件: $filepath"
      done
    done
    ;;
  
  delete)
    # 删除生成的文件
    for id1 in {1..2}; do
      for id2 in {1..8}; do
        filename="chapter_${id1}_section${id2}.html"
        filepath="${output_dir}/${filename}"
        
        # 检查文件是否存在并删除
        if [[ -f "$filepath" ]]; then
          rm "$filepath"
          echo "删除文件: $filepath"
        else
          echo "文件不存在: $filepath"
        fi
      done
    done
    ;;
  
  *)
    echo "无效的参数: $1"
    echo "用法: $0 [generate|delete]"
    exit 1
    ;;
esac