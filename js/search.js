        // 搜索功能 - 新窗口打开
        const searchEngine = document.getElementById('searchEngine');
        const searchText = document.getElementById('searchText');
        const searchBtn = document.getElementById('searchBtn');

        function doSearch() {
            const engineUrl = searchEngine.value;
            const keyword = searchText.value.trim();
            if (keyword) {
                window.open(engineUrl + encodeURIComponent(keyword), '_blank');
            } else {
                searchText.focus();
            }
        }

        searchBtn.addEventListener('click', doSearch);
        searchText.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') doSearch();
        });