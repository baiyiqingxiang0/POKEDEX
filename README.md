# 宝可梦图鉴 (Pokédex)

这是一个经典风格的宝可梦图鉴网页应用，模仿了原版红色宝可梦图鉴的外观和功能。通过这个应用，你可以浏览前两代（1-251）的所有宝可梦，并查看它们的动画精灵图。

![宝可梦图鉴预览](https://raw.githubusercontent.com/baiyiqingxiang0/POKEDEX/main/preview.png)

## 🌟 功能特点

- 经典红色宝可梦图鉴外观设计，完美还原游戏中的图鉴样式
- 包含蓝色大圆形镜头和三个小指示灯(红、黄、绿)，增强视觉效果
- 显示前两代(1-251)宝可梦完整列表
- 点击列表项可在中央显示屏查看对应宝可梦的动画精灵图
- 使用Pokemon Showdown的开源动画精灵图，保证高质量的视觉体验
- 响应式设计，完美适配电脑、平板和手机等不同屏幕尺寸
- 支持键盘和鼠标操作，提供多种交互方式

## 🛠️ 技术实现

- 纯HTML、CSS和JavaScript实现，无需任何框架
- 使用Pokemon Showdown的API获取精灵图
- 图片渲染使用pixelated模式保持像素风格
- 响应式布局设计，适配各种设备
- 模块化JavaScript代码，易于维护和扩展

## 📱 使用方法

### 在线体验
访问 [宝可梦图鉴在线演示](https://baiyiqingxiang0.github.io/POKEDEX/) 即可在线体验。

### 本地运行
1. 克隆仓库到本地：
   ```bash
   git clone https://github.com/baiyiqingxiang0/POKEDEX.git
   ```
2. 打开项目文件夹
3. 在浏览器中打开`index.html`文件
4. 开始探索宝可梦世界！

### 操作指南
- **鼠标操作**：点击列表中的宝可梦名称查看详情
- **D-pad操作**：点击方向键导航列表
- **键盘操作**：
  - 方向键：上下左右导航列表
  - Enter键：随机选择宝可梦（对应A按钮）
  - Esc键：清除当前选择（对应B按钮）

## 🔍 API来源

- 精灵图API: `https://play.pokemonshowdown.com/sprites/ani/[pokemon-name].gif`
- 备用静态图API: `https://play.pokemonshowdown.com/sprites/gen5/[pokemon-name].png`

## 📁 文件结构

- `index.html`: 主页面HTML结构
- `styles.css`: 样式表文件
- `script.js`: JavaScript功能实现
- `pokemon-data.js`: 宝可梦数据文件（包含前两代251只宝可梦的信息）

## 🚀 未来计划

- [ ] 添加宝可梦详细信息（属性、技能、进化链等）
- [ ] 添加搜索功能
- [ ] 添加按属性、世代等分类筛选功能
- [ ] 添加经典的宝可梦图鉴音效
- [ ] 添加本地存储功能，记住用户最近查看的宝可梦
- [ ] 添加更多世代的宝可梦

## 🤝 贡献指南

欢迎对本项目做出贡献！如果你有任何想法或建议，请按以下步骤操作：

1. Fork本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个Pull Request

## 📝 注意事项

本项目仅用于学习和娱乐目的，宝可梦相关版权归任天堂和The Pokémon Company所有。

## 📜 许可证

本项目采用MIT许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。
