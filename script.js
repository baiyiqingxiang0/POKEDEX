// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const pokemonList = document.getElementById('pokemon-list');
    const pokemonSprite = document.getElementById('pokemon-sprite');
    const pokemonId = document.getElementById('pokemon-id');
    const pokemonName = document.getElementById('pokemon-name');
    
    // 当前选中的宝可梦
    let selectedPokemon = null;
    
    // 初始化宝可梦列表
    function initPokemonList() {
        // 清空列表
        pokemonList.innerHTML = '';
        
        // 遍历宝可梦数据并创建列表项
        pokemonData.forEach(pokemon => {
            const listItem = document.createElement('li');
            listItem.textContent = `#${pokemon.id} ${pokemon.name}`;
            listItem.dataset.id = pokemon.id;
            listItem.dataset.name = pokemon.name;
            listItem.dataset.nameEn = pokemon.nameEn;
            
            // 添加点击事件
            listItem.addEventListener('click', function() {
                // 移除之前选中项的高亮
                if (selectedPokemon) {
                    selectedPokemon.classList.remove('active');
                }
                
                // 高亮当前选中项
                this.classList.add('active');
                selectedPokemon = this;
                
                // 显示宝可梦信息
                displayPokemon(pokemon);
            });
            
            // 添加到列表
            pokemonList.appendChild(listItem);
        });
    }
    
    // 显示宝可梦信息
    function displayPokemon(pokemon) {
        // 设置宝可梦ID和名称
        pokemonId.textContent = `#${pokemon.id}`;
        pokemonName.textContent = pokemon.name;
        
        // 设置宝可梦精灵图
        const spriteUrl = `https://play.pokemonshowdown.com/sprites/ani/${pokemon.nameEn}.gif`;
        
        // 显示加载中的提示
        pokemonSprite.src = '';
        pokemonSprite.alt = '加载中...';
        
        // 加载精灵图
        const img = new Image();
        img.onload = function() {
            pokemonSprite.src = spriteUrl;
            pokemonSprite.alt = pokemon.name;
        };
        img.onerror = function() {
            // 如果动画精灵图加载失败，尝试加载静态精灵图
            const staticSpriteUrl = `https://play.pokemonshowdown.com/sprites/gen5/${pokemon.nameEn}.png`;
            pokemonSprite.src = staticSpriteUrl;
            pokemonSprite.alt = pokemon.name;
        };
        img.src = spriteUrl;
    }
    
    // D-pad方向键功能
    function setupDPadControls() {
        const dPadUp = document.querySelector('.d-pad-up');
        const dPadDown = document.querySelector('.d-pad-down');
        const dPadLeft = document.querySelector('.d-pad-left');
        const dPadRight = document.querySelector('.d-pad-right');
        
        // 向上移动选择
        dPadUp.addEventListener('click', function() {
            navigatePokemonList(-3); // 向上移动3个位置（假设每行有3个宝可梦）
        });
        
        // 向下移动选择
        dPadDown.addEventListener('click', function() {
            navigatePokemonList(3); // 向下移动3个位置
        });
        
        // 向左移动选择
        dPadLeft.addEventListener('click', function() {
            navigatePokemonList(-1); // 向左移动1个位置
        });
        
        // 向右移动选择
        dPadRight.addEventListener('click', function() {
            navigatePokemonList(1); // 向右移动1个位置
        });
    }
    
    // 导航宝可梦列表
    function navigatePokemonList(offset) {
        if (!selectedPokemon) {
            // 如果没有选中项，选择第一个
            const firstItem = pokemonList.querySelector('li');
            if (firstItem) {
                firstItem.click();
            }
            return;
        }
        
        // 获取所有列表项
        const items = Array.from(pokemonList.querySelectorAll('li'));
        
        // 获取当前选中项的索引
        const currentIndex = items.indexOf(selectedPokemon);
        
        // 计算新索引
        let newIndex = currentIndex + offset;
        
        // 确保索引在有效范围内
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }
        
        // 点击新的列表项
        items[newIndex].click();
        
        // 确保新选中的项可见
        items[newIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
    
    // 设置A和B按钮功能
    function setupButtonControls() {
        const buttonA = document.querySelector('.button-a');
        const buttonB = document.querySelector('.button-b');
        
        // A按钮 - 显示宝可梦详细信息（这里简单实现为随机选择一个宝可梦）
        buttonA.addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * pokemonData.length);
            const randomPokemon = pokemonData[randomIndex];
            const items = Array.from(pokemonList.querySelectorAll('li'));
            items[randomIndex].click();
        });
        
        // B按钮 - 返回列表（这里简单实现为清除选择）
        buttonB.addEventListener('click', function() {
            if (selectedPokemon) {
                selectedPokemon.classList.remove('active');
                selectedPokemon = null;
                
                // 清除显示
                pokemonSprite.src = '';
                pokemonSprite.alt = '选择一个宝可梦';
                pokemonId.textContent = '';
                pokemonName.textContent = '';
            }
        });
    }
    
    // 键盘控制
    function setupKeyboardControls() {
        document.addEventListener('keydown', function(event) {
            switch(event.key) {
                case 'ArrowUp':
                    navigatePokemonList(-3);
                    break;
                case 'ArrowDown':
                    navigatePokemonList(3);
                    break;
                case 'ArrowLeft':
                    navigatePokemonList(-1);
                    break;
                case 'ArrowRight':
                    navigatePokemonList(1);
                    break;
                case 'Enter':
                    // 模拟A按钮
                    document.querySelector('.button-a').click();
                    break;
                case 'Escape':
                    // 模拟B按钮
                    document.querySelector('.button-b').click();
                    break;
            }
        });
    }
    
    // 初始化应用
    function initApp() {
        initPokemonList();
        setupDPadControls();
        setupButtonControls();
        setupKeyboardControls();
        
        // 默认选中第一个宝可梦
        const firstItem = pokemonList.querySelector('li');
        if (firstItem) {
            firstItem.click();
        }
    }
    
    // 启动应用
    initApp();
}); 