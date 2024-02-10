import React, { useState,useRef } from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import html2canvas from 'html2canvas';
import { Button } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  text-align:center ;
  margin-bottom:80px ;
  margin-top:20px;
  position:relative ;
`

const ContainerTable = styled.div`
  width: 73%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  height: 300px;
  text-align:center ;
  margin-bottom:20px ;
  margin-top:10px;
  position:relative ;
  overflow-x:scroll ;
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color:#f7f7f7;
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: #e6e6e6; 
  border-radius: 10px;
}


::-webkit-scrollbar-thumb:hover {
  background: #d6d6d6; 
}
`

const TimeTable= styled.div` 
width:100px;
height:50px;
background-color:${({bg})=>bg === false ? 'tranparent':'#cecece'} ;
border-left:${({bg})=>bg !== false && '#FFFFFF 1px solid'} ;
position:relative ;
cursor:pointer ;
`

const FlexData = styled.div` 
width:fit-content;
display:flex;
margin-top:0px ;
margin-left:auto ;
margin-right:auto ;
`

const FlexDate = styled.div` 
width:fit-content;
max-width:90%;
display:flex;
margin-top:0px ;
margin-left:auto ;
margin-right:auto ;
`

const TextTime = styled.div` 
font-size:0.75rem ;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-weight:300 ;
`

const TextDate = styled.div` 
font-size:0.75rem ;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-weight:300 ;
color:#FFFFFF;
`

const TimeTableArtis= styled.div` 
width:100px;
height:230px;
background-color:${({bg})=>bg === false ? 'tranparent':'#EFEFEF'} ;
border-left:${({bg})=>bg !== false && '#cecece 1px solid'} ;
position:relative ;
cursor:pointer ;
`
const DateConcert= styled.div` 
width:80px;
height:30px;
margin-right:10px ;
background-color:${({bg})=>bg === false ? '#cecece':'#126577'}  ;
border-radius:100px ;
position:relative ;
cursor:pointer ;
`
const TextArtist = styled.div` 
font-size:0.7rem ;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-weight:300;
color:${({color})=>color === true ? '#000000': '#FFFFFF'};
width:90%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
text-transform: uppercase;
`

const TextArtistSelect = styled.span` 
font-size:1rem ;
font-weight:900;
color:${({color})=>color};
width:90%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
text-transform: uppercase;
-webkit-text-stroke: 0.1px black;
`
const TabStage = styled.div` 
position:absolute;
top:${({top})=>top};
left:${({left})=>left+'%'};
background-color:${({bgColor})=>bgColor} ;
width:${({width})=>width+'%'} ;
height:18px ;
border:${({border})=>border === true&&'2px #000000 solid'};
z-index:1 ;
border-radius:20px ;
:hover{
    opacity:0.7 ;
}
`

const DotColor = styled.div` 
width:15px;
height:15px;
border-radius:100px ;
background-color:${({bgColor})=>bgColor} ;
margin-top:2px ;
`

const TextStage = styled.div` 
font-size:0.8rem ;
font-weight:300 ;
padding-left:5px ;
padding-top:2px ;
text-transform: uppercase;
`
const DivStage = styled.div`
display:flex;
margin-left:20px ;

`
const FlexStage = styled.div` 
width:90%;
display:flex;
flex-wrap:wrap ;
justify-content:center ;
margin-top:0px ;
margin-left:auto ;
margin-right:auto ;
margin-bottom:10px ;
`

const ModalArtist = styled.div` 
position:absolute;
width:300px;
height:250px;
background-color:#fafafa;

z-index:10 ;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius:10px ;
padding-left:10px;
padding-right:10px ;
`

const X = styled.div` 
position:absolute;
width:30px;
height:30px;
background-color:#FFFFFF;
border:1px solid #18C027 ;
z-index:11 ;
top: -10px;
right:-10px ;
border-radius:100px ;
font-size:1.25rem ;
cursor:pointer ;
padding-top:5px ;
padding-left:2px ;
padding-right:2px ;
`
const TextName = styled.div` 
font-size:1.05rem ;
color:${({bgColor})=>bgColor} ;
margin-top:40px;
margin-bottom:10px ;
text-transform: uppercase;
text-align: center;
`

const TextDes= styled.div` 
font-size:0.75rem ;
color:#252525 ;
margin-top:10px;
margin-bottom:10px ;
text-transform: uppercase;
display: flex;
line-height: 24px;
`

const FBText= styled.span` 
font-size:0.75rem ;
color:#0866FF;
margin-top:10px;
margin-bottom:10px ;
text-transform: uppercase;
cursor: pointer;
text-decoration: underline;
font-weight:900 ;
`
const TextModal = styled.div` 
font-size:1rem ;
color:${({bgColor})=>bgColor} ;
margin-bottom:5px ;
text-transform: uppercase;
text-align: center;
`

const ButtonSelect =styled.div`
padding:10px 20px ;
background-color: ${({bgColor})=>bgColor} ;
width:fit-content ;
position:absolute ;
bottom:10px ;
color:${({color})=>color === true ? '#000000': '#FFFFFF'};
border-radius:100px ;
left:50% ;
transform: translate(-50%, -10%);
right:50%;
cursor:  pointer;
:hover{
    opacity:0.9 ;
}
`

const XStage = styled.div` 
position:absolute;
width:15px;
height:15px;
background-color:#FFFFFF;
border:1px solid #000000 ;
z-index:100 ;
top: -5px;
right:-5px ;
border-radius:100px ;
font-size:0.75rem ;
cursor:pointer ;
`

const DivSelectDataArtist = styled.div`
width:fit-content;
max-width:90% ;
margin-left:auto;
margin-right:auto ;
padding-bottom:10px ;
height:fit-content ;
padding-right:10px;
padding-left:10px;
position: relative;
display: hidden;
`
const SelectDataArtist = styled.div`
margin-bottom:10px ;
text-transform: uppercase;
font-size: 1rem;
text-align:center ;
font-weight: bold;
`

const DivImgLogo =styled.img`
width: 80px;
`
const DivImgBG =styled.img`
position: absolute;
z-index: -1;
left: 0;
top:0;
width: -webkit-fill-available ;
height: -webkit-fill-available;
`

const TextState = styled.div`
font-size: .8rem;
background-color: ${({color})=>color};
padding: 0 10px;
border-radius: 100px;
color: #FFF;
text-transform: uppercase;
font-weight: 900;
`

const BadgeArtis = styled.span`
font-size: .8rem;
background-color: #7b38d1;
padding: 0 10px;
border-radius: 100px;
color: #FFF;
font-weight: 900;
`


const DivShowDataArtist = styled.div`
width: 350px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
margin-top: 10px;
`

const TextSelectArtist = styled.div`
font-size: .8rem;
text-align: left;
font-weight: bold;
width: 40%;
overflow: hidden;
`

const TextSelectTime = styled.div`
font-size: .8rem;
text-align: center;
font-weight: bold;
`

const DivTextDate = styled.div`
font-size: x-large;
color:#0c337a;
`
function Bmmf () {

    const [showModal,setShowModal]= useState(false)
    const [dataSelect,setDataSelect]= useState([])
    const [selectDate,setSelectDate]= useState(1)

   dataSelect?.sort(function (a, b) {
        return a.start.localeCompare(b.start);
    });
    
    

    const defaultTime =[
        {dateData:'2024/02/11 16:00',start:'1'},
        {dateData:'2024/02/11 17:00',start:'2'},
        {dateData:'2024/02/11 18:00',start:'3'},
        {dateData:'2024/02/11 19:00',start:'4'},
        {dateData:'2024/02/11 20:00',start:'5'},
        {dateData:'2024/02/11 21:00',start:'6'},
        {dateData:'2024/02/11 22:00',start:'7'},
        {dateData:'2024/02/11 23:00',start:'8'},
        {dateData:'2024/02/11 00:00',start:'9'},
        {dateData:'2024/02/11 01:00',start:'10'}
        ]

        const dataSatgeFrist =[
            {id:1,Artist:'Greasy Cafe',start:'2024/02/11 16:35',end:'17:20',time:45,stage:1},
            {id:2,Artist:'Blackbeens',start:'2024/02/11 17:30',end:'18:15',time:45,stage:1},
            {id:3,Artist:'Polycat', start:'2024/02/11 18:25',end:'19:10',time:45,stage:1},
            {id:4,Artist:'Purpeech',start:'2024/02/11 19:20',end:'20:05',time:45,stage:1},
            {id:5,Artist:'Only Monday',start:'2024/02/11 20:15',end:'21:00',time:45,stage:1},
            {id:6,Artist:'Taitosmith',start:'2024/02/11 21:10',end:'22:10',time:60,stage:1},
            {id:7,Artist:'Lomosonic',start:'2024/02/11 22:20',end:'23:20',time:60,stage:1},
            {id:8,Artist:'Cocktail',start:'2024/02/11 23:30',end:'02:00',time:150,stage:1},

            {id:9,Artist:'Zweed N Roll',start:'2024/02/11 16:35',end:'17:05',time:30,stage:2},
            {id:10,Artist:'Tinn',start:'2024/02/11 17:15',end:'17:45',time:30,stage:2},
            {id:11,Artist:"Alya's",start:'2024/02/11 17:55',end:'18:40',time:45,stage:2},
            {id:12,Artist:'Anatomy Rabbit',start:'2024/02/11 18:50',end:'19:35',time:45,stage:2},
            {id:13,Artist:'Dept',start:'2024/02/11 19:45',end:'20:30',time:45,stage:2},
            {id:14,Artist:'Musketeers',start:'2024/02/11 20:40',end:'21:40',time:60,stage:2},
            {id:15,Artist:'คณะขวัญใจ',start:'2024/02/11 21:50',end:'22:50',time:60,stage:2},
            {id:16,Artist:'Freehand',start:'2024/02/11 23:00',end:'00:00',time:60,stage:2},

            {id:17,Artist:'เขียนไขและวานิช',start:'2024/02/11 16:00',end:'16:30',time:30,stage:3},
            {id:18,Artist:'วรินทร์',start:'2024/02/11 16:40',end:'17:25',time:45,stage:3},
            {id:19,Artist:'ภูมินทร์',start:'2024/02/11 17:35',end:'18:20',time:45,stage:3},
            {id:20,Artist:'อภิรมย์',start:'2024/02/11 18:30',end:'19:15',time:45,stage:3},
            {id:21,Artist:'T047',start:'2024/02/11 19:25',end:'20:10',time:45,stage:3},
            {id:22,Artist:'ดวงดาวเดียวดาย',start:'2024/02/11 20:20',end:'21:05',time:45,stage:3},
            {id:23,Artist:'เรนิษรา',start:'2024/02/11 21:15',end:'22:00',time:45,stage:3},
            {id:24,Artist:'Slur',start:'2024/02/11 22:10',end:'22:55',time:45,stage:3},
            {id:25,Artist:'The Studio Project',start:'2024/02/11 23:05',end:'00:00',time:55,stage:3},
        ]

        const dataSatgeSecond =[]

        const selectValue = (data,status)=>{
            if(status === 'delete'){
                setShowModal(false)
                setDataSelect(dataSelect.filter((value)=> value.id !== data.id))
            }else{
            dataSelect.push(data)
            setShowModal(false)
            }
        }

        const certificateRef = useRef(null);

        const a = document.getElementById('ImgSelect');
        const b = document.getElementById('bgSelect')
        const c = document.getElementById('dataSelect')
        const d = document.getElementById('btSelect')
        if(d !== null){
            a.removeAttribute("src")
            a.removeAttribute("download")
            b.style.display = "none";
            c.style.display = "block";
            d.removeAttribute("disabled",false)
        }

        const screenShot = (element) => {
            b.style.display = "block";
            html2canvas(element).then(canvas => {
                const image = canvas.toDataURL('png');
                a.setAttribute('download', 'certificate.png');
                a.setAttribute('src', image);
                d.setAttribute("disabled",true)
                a.style.width = "90%";
                c.style.display = "none";              
            });
        };
          
  return (
      <Container>
      <FlexDate>
    <TextDes>
        <div>- develop by</div> <FacebookIcon sx={{color:"#0866FF",paddingRight:"5px",paddingLeft:"5px"}}/> <div> <FBText  onClick={()=> window.open('https://www.facebook.com/Mintnutti/')}>Miint Nuttida</FBText> - </div>
    </TextDes>
    </FlexDate>
    <FlexStage>
        <DivStage>
        <DotColor bgColor={'#A380C1'}/>
        <TextStage>MOON STATE</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#F7BC1E'}/>
        <TextStage>CHILL STATE</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#18C027'}/>
        <TextStage>CAMP STATE</TextStage>
        </DivStage>
    </FlexStage>

    <FlexDate>
    <DateConcert onClick={()=> setSelectDate(1)} bg={selectDate === 1 && true}>
        <TextDate>วันที่ 11</TextDate>
    </DateConcert>

    {/* <DateConcert onClick={()=> setSelectDate(2)}  bg={selectDate === 2 && true}>
        <TextDate>วันที่ 10</TextDate>
    </DateConcert> */}
    </FlexDate>
    <FlexDate>
    <TextDes style={{color:'red'}}>
        ***กดที่ชื่อศิลปินเพื่อเลือก***
    </TextDes>
    </FlexDate>
    <ContainerTable>
    <FlexData>
        {defaultTime.map((data)=><TimeTable><TextTime>{new Date(data.dateData).getHours()}.00</TextTime></TimeTable>)}
    </FlexData>

    <FlexData>
            {defaultTime.map((data)=>
            <TimeTableArtis>
            {selectDate === 1 ? 
                dataSatgeFrist.map((value,key)=> 
                    new Date(value.start).getHours() === new Date(data.dateData).getHours() && 
                    <TabStage 
                    onClick={()=> setShowModal(value)}
                    border= {value.id === dataSelect.find(element => element.id === value.id)?.id && true }
                    top={   
                        value.stage === 1 ? '2%':
                        value.stage === 2 ? '13%':
                        value.stage === 3 && '24%'
                        }
                    width={(value.time/60)*100}
                    bgColor={
                        value.stage === 1 ?'#A380C1':
                        value.stage === 2 ? '#F7BC1E':
                        value.stage === 3 && '#18C027'
                        }
                    left={(new Date(value.start).getMinutes()/60)*100}
                    >
                    {value.id === dataSelect.find(element => element.id === value.id)?.id && 
                    <XStage>x</XStage>
                    } 
                    <TextArtist color={(value.stage === 6 || value.stage === 8) && true}>
                    {value.Artist }
                    </TextArtist>
                    </TabStage>
                    ): 
                    dataSatgeSecond.map((value,key)=> 
                    new Date(value.start).getHours() === new Date(data.dateData).getHours() && 
                    <TabStage 
                    onClick={()=> setShowModal(value)}
                    border= {value.id === dataSelect.find(element => element.id === value.id)?.id && true }
                    top={   
                        value.stage === 1 ? '2%':
                        value.stage === 2 ? '13%':
                        value.stage === 3 && '24%'
                        }
                    width={(value.time/60)*100}
                    bgColor={
                        value.stage === 1 ?'#A380C1':
                        value.stage === 2 ? '#F7BC1E':
                        value.stage === 3 && '#18C027'
                        }
                    left={(new Date(value.start).getMinutes()/60)*100}
                    >
                    {value.id === dataSelect.find(element => element.id === value.id)?.id && 
                    <XStage>x</XStage>
                    } 
                    <TextArtist color={ (value.stage === 6 ||value.stage === 8) && true}>
                    {value.Artist }
                    </TextArtist>
                    </TabStage>
                    )
                    
                    }
            </TimeTableArtis>)}
    </FlexData>
    </ContainerTable>
    <FlexDate>
    <TextDes style={{color:'red'}}>
        ***เมื่อเลือกรายชื่อศิลปินเสร็จแล้วให้กดปุ่มด้านล่างและกดบันทึกรูปภาพ หากต้องการแก้ไขรายชื่อสามารถกดเลือกและลบรายชื่อศิลปินได้ตามปกติ***
    </TextDes>
    </FlexDate>
<DivSelectDataArtist id="dataSelect" style={{display:'block'}} ref={certificateRef}>
<DivImgLogo src={process.env.PUBLIC_URL + '/bmmf_13_logo.png'} />
<DivImgBG id='bgSelect' style={{display:'none'}} src={process.env.PUBLIC_URL + '/bgskyopacity.png'}/>
<SelectDataArtist>
   <DivTextDate>รายชื่อศิลปินที่เลือก</DivTextDate>
</SelectDataArtist>
<FlexStage>
        <DivStage>
        <DotColor bgColor={'#A380C1'}/>
        <TextStage>MOON STATE</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#F7BC1E'}/>
        <TextStage>CHILL STATE</TextStage>
        </DivStage>

        <DivStage>
        <DotColor bgColor={'#18C027'}/>
        <TextStage>CAMP STATE</TextStage>
        </DivStage>
    </FlexStage>
    <DivShowDataArtist>
        {dataSelect?.map((data)=>
        <DivShowDataArtist>
        <TextSelectArtist>
            <BadgeArtis>ศิลปิน</BadgeArtis> {data.Artist}
        </TextSelectArtist>
        <TextSelectTime>
        {new Date(data.start).getHours() < 10 ? '0'+new Date(data.start).getHours() :new Date(data.start).getHours()}:{new Date(data.start).getMinutes() === 0 ? '00':new Date(data.start).getMinutes()}น.-{data.end}น.
        </TextSelectTime>
        <TextState
        color={
            data.stage === 1 ?'#A380C1':
            data.stage === 2 ? '#F7BC1E':
            data.stage === 3 && '#18C027'
            }
        >
        {data.stage === 1 ?'MOON STAGE':
        data.stage === 2 ? 'CHILL STAGE':
        data.stage === 3 && 'CAMP STAGE'}
        </TextState>
        </DivShowDataArtist>
        )}
    </DivShowDataArtist>
</DivSelectDataArtist>
<DivSelectDataArtist>
    <img id='ImgSelect'/>
</DivSelectDataArtist>

<Modal
        open={showModal}
        onClose={()=>setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
        {showModal !==false && 
                    dataSatgeFrist.map((value,key)=> 
                    <>
                    <ModalArtist>
                    <X onClick={()=>setShowModal(false)}>
                        <CloseIcon sx={{color:"#18C027",paddingLeft:"2px"}}/>
                    </X>
                    <TextName
                    bgColor={
                        showModal.stage === 1 ?'#A380C1':
                        showModal.stage === 2 ? '#F7BC1E':
                        showModal.stage === 3 && '#18C027'
                        }
                    >{showModal.Artist}</TextName>
                    <TextModal>
                    เวลา {new Date(showModal.start).getHours() < 10 ? '0'+new Date(showModal.start).getHours() :new Date(showModal.start).getHours()}:{new Date(showModal.start).getMinutes() === 0 ? '00':new Date(showModal.start).getMinutes()}-
                    {showModal.end}
                    </TextModal>
                    <TextModal>
                    เวลาในการแสดง {showModal.time} นาที
                    </TextModal>
                    <TextModal
                    bgColor={
                        showModal.stage === 1 ?'#A380C1':
                        showModal.stage === 2 ? '#F7BC1E':
                        showModal.stage === 3 && '#18C027'
                        }
                    >
                    เวที {
                    showModal.stage === 1 ?'MOUNTAIN STAGE':
                    showModal.stage === 2 ? 'COW STAGE':
                    showModal.stage === 3 && 'BLOCK STAGE'}
                    </TextModal>
                    <ButtonSelect
                    onClick={()=>
                        showModal.id === dataSelect.find(element => element.id === showModal.id)?.id?
                        selectValue(showModal,'delete') : selectValue(showModal,1)
                    }
                    bgColor={
                        showModal.id === dataSelect.find(element => element.id === showModal.id)?.id?
                        '#cecece' :
                        showModal.stage === 1 ?'#A380C1':
                        showModal.stage === 2 ? '#F7BC1E':
                        showModal.stage === 3 && '#18C027'
                        }
                        color={
                            (showModal.stage === 6 ||
                            showModal.stage === 8 )&& true}
                    >
                    { showModal.id === dataSelect.find(element => element.id === showModal.id)?.id?
                        'ลบ' :'เลือก'}
                    </ButtonSelect>
                    </ModalArtist>
                    </>
                    
                    )}
        </Box> 
      </Modal>

    <Button id="btSelect"
            sx={{marginTop:"20px",marginBottom:"50px",backgroundColor:"#126577"}}
            startIcon={<PhotoIcon />}
            variant="contained"
            onClick={() => screenShot(certificateRef.current)}
            disabled={false}
            >
            แปลงให้เป็นรูปภาพ
     </Button>

                  
    </Container>
    )
}

export default Bmmf