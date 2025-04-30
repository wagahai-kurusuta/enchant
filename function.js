		//テーブルオブジェクト
		let objTable1  = document.getElementById('enchanttable');
		let objTable2  = document.getElementById('consumption');
		//オーバーエンチャント関係
		//タイプ固有のエンチャント設定
		let Type = document.getElementById('Type');
		Type.addEventListener('change', function() {
			if(Type.value == 0){
				OE = OE_no.concat(OE_atk);
				OInV = OInV_no.concat(OInV_atk);
				OW = OW_no.concat(OW_atk);
				OD = OD_no.concat(OD_atk);
				OR = OR_no.concat(OR_atk);
			}else if(Type.value == 1){
				OE = OE_no.concat(OE_spd);
				OInV = OInV_no.concat(OInV_spd);
				OW = OW_no.concat(OW_spd);
				OD = OD_no.concat(OD_spd);
				OR = OR_no.concat(OR_spd);
			}else if(Type.value == 2){
				OE = OE_no.concat(OE_def);
				OInV = OInV_no.concat(OInV_def);
				OW = OW_no.concat(OW_def);
				OD = OD_no.concat(OD_def);
				OR = OR_no.concat(OR_def);
			}else if(Type.value == 3){
				OE = OE_no.concat(OE_sup);
				OInV = OInV_no.concat(OInV_sup);
				OW = OW_no.concat(OW_sup);
				OD = OD_no.concat(OD_sup);
				OR = OR_no.concat(OR_sup);
			}else if(Type.value == 4){
				OE = OE_no.concat(OE_heal);
				OInV = OInV_no.concat(OInV_heal);
				OW = OW_no.concat(OW_heal);
				OD = OD_no.concat(OD_heal);
				OR = OR_no.concat(OR_heal);
			}
			console.log(OE);
			},false);

		function OverEnchant(s1) {
			if(s1 == 0){
				l1 = OE.length;
				k1 = Math.floor(Math.random()*l1 + 1);
				k1 = k1 - 1;
         			OA = OE[k1];
				console.log(OA);
				k2 = Math.floor(Math.random() * OD[k1] + 1);
			}else{
				if(l1 == 0){
					alert("オーバーエンチャント効果の抽選を行ってください"); 
					return;
				}
				k2 = Math.floor(Math.random() * OD[k1] * 0.6 + 1 + OD[k1] * 0.4);
			}
			
			OB = Math.round((OInV[k1] + OW[k1] * k2) *10) / 10;
			console.log(OB);
			if(OB >= OR[k1][4]){
				OC = "GOD";
			}else if(OB >= OR[k1][3]){
				OC = "S";
			}else if(OB >= OR[k1][2]){
				OC = "A";
			}else if(OB >= OR[k1][1]){
				OC = "B";
			}else{
				OC = "C";
			}
			console.log(OC);

			// 出力
			objTable1.rows[4].cells[1].innerHTML = OA;
			objTable1.rows[4].cells[2].innerHTML = OB;
			objTable1.rows[4].cells[3].innerHTML = OC;

			
			n = objTable2.rows[2].cells[1].innerHTML;
			if(s1==0){
				objTable2.rows[2].cells[1].innerHTML = Number(n) + 1;
			}else{
				objTable2.rows[2].cells[1].innerHTML = Number(n) + 3;
			}
        		}

		//エンチャント関係3種抽選
		function Enchant(s2) {
			if(s2 == 0){
				k3 = Math.floor(Math.random()*20);
				for (let i = 0;  i <= 2;  i++) {
					m[i] = Number(com[k3].substr(i,1));
					A[i] = E[m[i]];
				}
			}else{
				if(m[1] == 100){
					alert("エンチャント効果の抽選を行ってください"); 
					return;
				}
			}
			for (let i = 0;  i <= 2;  i++) {
				k4 = Math.floor(Math.random() * OD[m[i]] + 1);
				B[i] = Math.round((InV[m[i]] + W[m[i]] * k4) *10) / 10;
				if(B[i] >= R[m[i]][4]){
					C[i] = "GOD";
				}else if(B[i] >= R[m[i]][3]){
					C[i] = "S";
				}else if(B[i] >= R[m[i]][2]){
					C[i] = "A";
				}else if(B[i] >= R[m[i]][1]){
					C[i] = "B";
				}else{
					C[i] = "C";
				}
				//出力
				objTable1.rows[i + 1].cells[1].innerHTML = A[i];
				objTable1.rows[i + 1].cells[2].innerHTML = B[i];
				objTable1.rows[i + 1].cells[3].innerHTML = C[i];				
			}
			n = objTable2.rows[1].cells[1].innerHTML;
			if(s2==0){
				objTable2.rows[1].cells[1].innerHTML = Number(n) + 1;
			}else{
				objTable2.rows[1].cells[1].innerHTML = Number(n) + 3;
			}
		}
		
		//エンチャント個別抽選
		function In_Enchant(s3,s4) {
			if(m[1] == 100){
				alert("エンチャント効果の抽選を行ってください"); 
				return;
				}
			//出ていない効果と抽選対象の効果で配列生成
			if(s3 == 0){
				j = 0;
				for (let i = 0;  i <= 5;  i++) {
					if(i != m[0] && i != m[1] && i != m[2]){
						tmp[j] = i;
						j = j +1;	
					}	
				}
				tmp[j] = m[s4];
				k3 = Math.floor(Math.random()*4);
				m[s4] = tmp[k3];
				A[s4] = E[tmp[k3]];
				k4 = Math.floor(Math.random() * D[tmp[k3]] + 1);
				
			}else{
				tmp[k3] = s4;
				k4 = Math.floor(Math.random() * D[tmp[k3]] * 0.6 + 1 + D[tmp[k3]] * 0.4);	
			}
			
			B[s4] = Math.round((InV[tmp[k3]] + W[tmp[k3]] * k4) *10) / 10;
			if(B[s4] >= R[tmp[k3]][4]){
				C[s4] = "GOD";
			}else if(B[s4] >= R[tmp[k3]][3]){
				C[s4] = "S";
			}else if(B[s4] >= R[tmp[k3]][2]){
				C[s4] = "A";
			}else if(B[s4] >= R[tmp[k3]][1]){
				C[s4] = "B";
			}else{
				C[s4] = "C";
			}
			//出力
			objTable1.rows[s4 + 1].cells[1].innerHTML = A[s4];
			objTable1.rows[s4 + 1].cells[2].innerHTML = B[s4];
			objTable1.rows[s4 + 1].cells[3].innerHTML = C[s4];				
			
			n = objTable2.rows[2].cells[1].innerHTML;
			if(s3==0){
				objTable2.rows[2].cells[1].innerHTML = Number(n) + 1;
			}else{
				objTable2.rows[2].cells[1].innerHTML = Number(n) + 3;
			}
		}
		
		//初期化
		function clean(){
			for (let i = 1;  i <= 4;  i++) {
				for (let j = 1;  j <= 3;  j++) {
					objTable1.rows[i].cells[j].innerHTML = "";
				}
			}
		objTable2.rows[1].cells[1].innerHTML = 0;
		objTable2.rows[2].cells[1].innerHTML = 0;


		l1 = 0;
		m = [100,100,100];

		Type.value = 0;
		OE = OE_no.concat(OE_atk);
		OInV = OInV_no.concat(OInV_atk);
		OW = OW_no.concat(OW_atk);
		OD = OD_no.concat(OD_atk);
		OR = OR_no.concat(OR_atk);
		}

