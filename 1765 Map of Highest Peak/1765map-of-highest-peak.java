class Solution {
    int row = 0, col = 0;
    public int[][] highestPeak(int[][] isWater) {
        row = isWater.length;
        col = isWater[0].length;
        

        int[][] grid = new int[row][col];    
        Queue<int[]> queue = new LinkedList<>();
        for(int i=0; i<row; ++i){
            for(int j=0; j<col; ++j){
                if(isWater[i][j] == 1){
                    grid[i][j] = 0;
                    queue.add(new int[]{i, j, grid[i][j]});
                }else grid[i][j] = -1;
            }
        }

        while(!queue.isEmpty()){
            int[] co = queue.poll(); 

            int[][] dirs = new int[][]{new int[]{0, -1}, new int[]{-1, 0}, new int[]{0, 1}, new int[]{1, 0}};

            for(int[] d : dirs){
                int x = d[0]+co[0], y = d[1]+co[1];
                if(x > -1 && y > -1 && x < row && y < col && grid[x][y] == -1){
                    grid[x][y] = co[2]+1;
                    queue.add(new int[]{x, y, grid[x][y]});
                }
            }
        }
        
        return grid;
    }
}