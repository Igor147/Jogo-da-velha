const tic_tac_toe = {

	board: ['','','','','','','','',''],
	  symbols: {
                options: ['O','X'],
                turn_index: 0,
                change(){
                    this.turn_index = ( this.turn_index === 0 ? 1:0 );
                }
      },
	},
	container_element: null,
	gameover: false,

	init: function(container){
		this.container_element = container;
	},

	make_play: function(position){
		if (this.gameover) return false;
		if (this.boar[position] === ''){

			this.boar[position] = this.simbols.options [ this.simbols.turn_index ];
		}


	},

	draw: function(){
		let content = '';
		for (i in this.board){
			content += '<div onclick = "tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>';
		}

		this.container_element.innerHTML = content;
	}

};