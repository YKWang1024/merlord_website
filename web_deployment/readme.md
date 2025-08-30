# 复制主配置
sudo cp web_deployment/merlord.conf /etc/nginx/sites-available/merlord.com

# 复制优化配置到主配置目录
sudo cp web_deployment/nginx-optimization.conf /etc/nginx/conf.d/

# 启用站点
sudo ln -s /etc/nginx/sites-available/merlord.com /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重新加载
sudo systemctl reload nginx