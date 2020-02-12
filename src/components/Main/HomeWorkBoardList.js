import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ApiDefault from '../utils';
import { HomeWorkBoardWrapper, PaginationWrapper, PaginationItemBlock } from './styles';
import importantIcon from './img/importantIcon.png';
import oIcon from './img/oIcon.png';
import xIcon from './img/xIcon.png';
import prevButton from './img/prevButton.png';
import nextButton from './img/nextButton.png';

const HomeWorkBoardList = ({ homework, match }) => {
    const activeStyle = {
        display: 'block',
        width: '30px',
        height: '30px',
        border: '1px solid #2E2E2E',
        backgroundColor: '#ffffff',
        boxSizing: 'border-box',
        color: '#1A1A1A',
        fontFamily: 'Roboto'
    };
    const dummyHomework = [
        {
            id: 59,
            homeworkTitle: "1",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "2",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "마지막보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
        {
            id: 59,
            homeworkTitle: "이성진 바보",
            homeworkType: 2,
            homework_deadline: 1582934400000,
            submissionStatus: false,
            created_at: 1581292800000
        },
    ];
    console.log(match.params.homeworkid);
    const [nowPage, setNowPage] = useState(!dummyHomework.length ? undefined : match.params.homeworkid !== undefined ? parseInt(match.params.homeworkid) : 1);
    const [startPage, setStartPage] = useState(Math.floor((nowPage - 1) / 5) * 5 + 1);
    const [endPage, setEndPage] = useState(!dummyHomework.length ? undefined : dummyHomework.length % 8 !== 0 ? Math.floor(dummyHomework.length / 8) + 1: Math.floor(dummyHomework.length) / 8);
    const [paginationNumber, setPaginationNumber] = useState([]);
    useEffect(() => {
        const a = [];
        for (var i = 1; i <= endPage; i++) a.push(i);
        setPaginationNumber(a);
    }, []);
    return (
        <HomeWorkBoardWrapper>
            <h1>과제안내</h1>
            <hr />
            <div>
                <header>
                    <div>
                        <th>유형</th>
                        <th>제목</th>
                        <th>작성일</th>
                        <th>기한</th>
                        <th>팀원</th>
                        <th>제출여부</th>
                    </div>
                </header>
                <main>
                    {
                        dummyHomework.map((data, index) => {
                            console.log(index);
                            if (index >= (nowPage * 8) || index < (nowPage - 1) * 8) return;
                            let isTeam = null;
                            ApiDefault.get('team', {
                                params: {
                                    homeworkId: data.id
                                },
                                headers: {
                                    Authorization: localStorage.getItem('access_token')
                                }
                            }).then(res => {
                                console.log(res);
                                isTeam = true;
                            }).catch(e => {
                                console.log(e.response);
                                isTeam = false;
                            })
                            return (<div>
                                <td>{data.homeworkType === 0 ? '개인' : data.homeworkType === 1 ? '팀' : '실험'}</td>
                                <td>{data.homeworkTitle}</td>
                                <td>{new Date(data['created_at']).yyyymmddWithDot()}</td>
                                <td>{new Date(data['homework_deadline']).yyyymmddWithDot()}</td>
                                <td><img src={isTeam === undefined ? '' : isTeam ? oIcon : xIcon} /></td>
                                <td><img src={data.submissionStatus ? oIcon : xIcon} /></td>
                                {data.important ? <img src={importantIcon} /> : ''}
                            </div>);
                        })
                    }
                </main>
            </div>
            <PaginationWrapper>
                {
                    startPage === 1 ? '' :
                    // <NavLink exact to={(startPage - 5) === 1 ? '/' : `${startPage - 5}`} onClick={() => setStartPage(startPage - 5) && setNowPage(startPage)}>
                        <div onClick={() => {
                            setStartPage(startPage - 5);
                            setNowPage(startPage - 5);
                        }}>
                            <img src={prevButton} />
                        </div>
                    // </NavLink>
                }
                <ul>
                    {
                        paginationNumber.map(n => {
                            console.log(n === 1 ? '/' : n);
                            if (n < startPage || n > startPage + 4) return;
                            return <PaginationItemBlock activeStyle={n === nowPage} onClick={() => setNowPage(n)}><span>{n}</span></PaginationItemBlock>;
                        })
                    }
                    {/* <li><NavLink exact to="/" activeStyle={activeStyle} onClick={() => setPage(1)}>1</NavLink></li>
                    <li><NavLink exact to="/2" activeStyle={activeStyle} onClick={() => setPage(2)}>2</NavLink></li>
                    <li><NavLink exact to="/3" activeStyle={activeStyle} onClick={() => setPage(3)}>3</NavLink></li>
                    <li><NavLink exact to="/4" activeStyle={activeStyle} onClick={() => setPage(4)}>4</NavLink></li>
                    <li><NavLink exact to="/5" activeStyle={activeStyle} onClick={() => setPage(5)}>5</NavLink></li> */}
                </ul>
                {
                    (startPage - 1) / 5 === Math.floor((endPage - 1) / 5) ? '' :
                    // <NavLink exact to={`/${startPage + 5}`}>
                        <div onClick={() => { 
                            setStartPage(startPage + 5);
                            setNowPage(startPage + 5);
                        }}>
                            <img src={nextButton} />
                        </div>
                    // </NavLink>
                }
            </PaginationWrapper>
        </HomeWorkBoardWrapper>
    );
};

export default HomeWorkBoardList;