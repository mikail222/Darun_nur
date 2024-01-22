import React, { useEffect, useState } from "react";
import { deleteUser } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Users = (props) => {
  const [search_user, setSearch_user] = useState(" ");
  const [users, setUsers] = useState([]);
  const [visaDoc, setVisaDoc] = useState([]);
  const [view, setView] = useState(false);
  const [viewVisa, setViewVisa] = useState(false);
  const [viewUser, setViewUser] = useState(false);
  const [affiliate, setAffiliate] = useState([]);
  const [delete_User, setDelete_User] = useState([]);
  const [visaId, setVisaId] = useState([]);
  const [affiliateId, setAffiliateId] = useState([]);
  const [userId, setUserId] = useState([]);
  const [user, setUser] = useState(false);
  const [affilate, setAffilate] = useState(false);
  const [visa, setVisa] = useState(false);

  const [err, setErr] = useState(" ");
  const client = auth.currentUser;
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        const list = [];
        snapShot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  useEffect(() => {
    const unsubs = onSnapshot(
      collection(db, "Afillate"),
      (snapShot) => {
        const Affiliates = [];
        snapShot.forEach((doc) => {
          Affiliates.push({ id: doc.id, ...doc.data() });
        });
        setAffiliate(Affiliates);
        props?.callback(Affiliates);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsubs();
    };
  }, []);
  useEffect(() => {
    const unsubsDoc = onSnapshot(
      collection(db, "Visa_assistance"),
      (snapShot) => {
        const Visa = [];
        snapShot.forEach((doc) => {
          Visa.push({ id: doc.id, ...doc.data() });
        });
        setVisaDoc(Visa);
        props?.callVisa(Visa);
      },
      (error) => {
        alert(error);
      }
    );
    return () => {
      unsubsDoc();
    };
  }, []);

  const Search_user = users?.filter(
    (m) =>
      m.email?.toLowerCase().includes(search_user.toLowerCase()) ||
      m.first?.includes(search_user.toLowerCase())
  );
  const handleDeleteUser = async (id) => {
    const checkPersonsName = Search_user.find((person) => person.id === id);
    try {
      if (
        window.confirm(
          `are you sure you want  to  delete  ${
            checkPersonsName.first + " " + checkPersonsName.LastName
          } ?`
        )
      ) {
        await deleteDoc(doc(db, "users", id));
        deleteUser(client);
        setDelete_User(Search_user.filter(({ id }) => id !== id));
        console.log(delete_User);
      }
    } catch (err) {
      setErr(err.message);
      setTimeout(() => {
        setErr(null);
      }, 5000);
    }
  };
  const handleDeleteAffiliate = async (id) => {
    const checkPersonsName = affiliate.find((person) => person.id === id);
    try {
      if (
        window.confirm(
          `are you sure you want  to  delete  ${
            checkPersonsName.first_name + " " + checkPersonsName.last_name
          } ?`
        )
      ) {
        await deleteDoc(doc(db, "Afillate", id));
        deleteUser(client);
        setAffiliateId(affiliate.filter(({ id }) => id !== id));
      }
    } catch (err) {
      setErr(err.message);
      setTimeout(() => {
        setErr(null);
      }, 5000);
    }
  };
  const handleDeleteVisa = async (id) => {
    const checkPersonsName = visaDoc.find((person) => person.id === id);
    try {
      if (
        window.confirm(
          `are  you sure you want  to  delete  ${
            checkPersonsName.firstname + " " + checkPersonsName.lastname
          } ?`
        )
      ) {
        await deleteDoc(doc(db, "Visa_assistance", id));
        deleteUser(client);
        setVisaId(visaDoc.filter(({ id }) => id !== id));
      }
    } catch (err) {
      setErr(err.message);
      setTimeout(() => {
        setErr(null);
      }, 5000);
    }
  };

  const currentUser = auth.currentUser?.email;
  const filterImg = users.filter(({ img }) => img === img);
  const handleView = (id) => {
    const getAffiliate = affiliate.find((person) => person.id === id);
    setAffiliateId(getAffiliate);
    setView(true);
    console.log(getAffiliate);
  };
  const handleVisaView = (id) => {
    const getVisaId = visaDoc.find((person) => person.id === id);
    setVisaId(getVisaId);
    setViewVisa(true);
  };
  const handleUserDetail = (id) => {
    const getUser = users.find((person) => person.id === id);
    setUserId(getUser);
    setViewUser(true);
  };
  useEffect(() => {
    const interChange = () => {
      if (user) {
      }
      if (affilate) {
        setUser(false) || setVisa(false);
      }
      if (visa) {
        setUser(false) || setAffilate(false);
      }
    };

    interChange();
  }, []);

  return (
    <div className="user  bg-[#f5f5f5]">
      <div className=" w-[100%] adminBg h-[35vh] lg:h-[70vh] ">
        <div className="flex flex-col md:flex-row lg:flex-row pt-[5%]">
          <div className="userBTN flex gap-[5%] flex-row lg:justify-evenly items-center justify-center md:w-[50%] lg:w-[50%]">
            {user ? (
              <button
                className="bg-[lightgreen]"
                onClick={() => setUser(false)}
              >
                Hidde user
              </button>
            ) : (
              <button className="bg-[lightgreen]" onClick={() => setUser(true)}>
                User Docs
              </button>
            )}
            {affilate ? (
              <button className="bg-[teal]" onClick={() => setAffilate(false)}>
                Hide Affilate
              </button>
            ) : (
              <button className="bg-[teal]" onClick={() => setAffilate(true)}>
                Affilate Docs
              </button>
            )}
            {visa ? (
              <button className="bg-[purple]" onClick={() => setVisa(false)}>
                Hide Visa
              </button>
            ) : (
              <button className="bg-[teal]" onClick={() => setVisa(true)}>
                Visa Docs
              </button>
            )}
          </div>
          <div className="searchField">
            <input
              type="text"
              onChange={(e) => setSearch_user(e.target.value)}
              placeholder="please type here to display user..."
              className="filter-user"
              id="filter_user"
            />
          </div>
        </div>
        {user ? (
          <div className="productWrapper">
            {delete_User && <p className="">{delete_User}</p>}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="bg-[lightgreen] text-[1.5rem]">
                    <TableCell>Image</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Last name</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Contact</TableCell>
                    <TableCell align="left">Details</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Search_user?.map(
                    ({ img, first, LastName, email, phone, id }, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <img
                            src={filterImg ? img : "no image"}
                            alt=""
                            className={
                              email === currentUser
                                ? "Authoronline"
                                : "AuthoriOffline"
                            }
                          />
                        </TableCell>
                        <TableCell align="left">{first}</TableCell>
                        <TableCell align="left"> {LastName}</TableCell>{" "}
                        <TableCell align="left">{email}</TableCell>
                        <TableCell align="center">{phone}</TableCell>{" "}
                        <TableCell align="left">
                          {viewUser === false && (
                            <button
                              onClick={() => handleUserDetail(id)}
                              className="text-[lightgreen]  text-[1rem] font-bold"
                            >
                              View
                            </button>
                          )}
                        </TableCell>
                        <TableCell align="left">
                          {" "}
                          {email !== currentUser && (
                            <td className="offline">Offline</td>
                          )}
                          {email === currentUser && (
                            <td className="online">online</td>
                          )}
                        </TableCell>
                        <TableCell align="left">
                          <button
                            onClick={() => handleDeleteUser(id)}
                            className="delete"
                          >
                            delete
                          </button>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {user && viewUser === true && (
              <div className="flex flex-col justify-center  items-center">
                <img
                  src={filterImg ? userId.img : "no image"}
                  alt=""
                  className="lg:w-[550px] lg:h-[550px] lg:object-cover rounded-[100%] object-cover pt-[5%]"
                />

                <div className="flex flex-row gap-[5%] leading-[50px] mt-[5%]">
                  <div>
                    {" "}
                    <h3>Username:</h3>
                    <h3>Name:</h3>
                    {userId.email && <h6>Email:</h6>}
                    {userId.address && <h5>Address:</h5>}
                    {userId.city && <h5>City:</h5>}
                    {userId.state && <h5>State:</h5>}
                    {userId.job && <h5>Job:</h5>}
                    {userId.position && <h5>Position:</h5>}
                    {userId.institution && <h5>Institution:</h5>}
                    {userId.phone && <h5>Contact:</h5>}
                  </div>
                  <div>
                    <h6>{userId.user}</h6>

                    <h3>
                      {userId.first}
                      {"  "}
                      {userId.LastName}
                    </h3>

                    <h6>{userId.email}</h6>
                    <h5>{userId.address}</h5>
                    <h5>{userId.city}</h5>
                    <h5>{userId.state}</h5>
                    <h5>{userId.country}</h5>
                    <h5>{userId.job}</h5>
                    <h5>{userId.position}</h5>
                    <h5>{userId.institution}</h5>
                    <h5> {userId.phone}</h5>
                  </div>
                </div>
                {userId.email !== currentUser && (
                  <td className="offline text-[2rem] my-[5%]">Offline</td>
                )}
                {userId.email === currentUser && (
                  <td className="online text-[2rem] my-[5%]">online</td>
                )}
                <div className="w-[50%] flex flex-row justify-between">
                  {viewUser === true && (
                    <button
                      onClick={() => setViewUser(false)}
                      className="close"
                    >
                      close
                    </button>
                  )}

                  <button
                    onClick={() => handleDeleteUser(id)}
                    className="delete"
                  >
                    delete
                  </button>
                </div>
              </div>
            )}
            {!users && (
              <div className="loaderDiv">
                <p> sorry trying to upload user,please wait a minute</p>
                <p className="loader"></p>
              </div>
            )}{" "}
          </div>
        ) : (
          ""
        )}
        {affilate && (
          <div className="productWrapper">
            {delete_User && <p className="">{delete_User}</p>}

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="bg-[teal] text-[1.5rem]">
                    <TableCell>Image</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Last name</TableCell>
                    <TableCell align="left">Email</TableCell>{" "}
                    <TableCell align="left">Company</TableCell>
                    <TableCell align="left">Contact</TableCell>
                    <TableCell align="left">Status</TableCell>{" "}
                    <TableCell align="left">Details</TableCell>{" "}
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {affiliate?.map(
                    (
                      {
                        img,
                        first_name,
                        last_name,
                        email,
                        phone,
                        company_name,
                        id,
                      },
                      i
                    ) => (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <img
                            src={filterImg ? img : "no image"}
                            alt=""
                            className={
                              email === currentUser
                                ? "Authoronline"
                                : "AuthoriOffline"
                            }
                          />
                        </TableCell>
                        <TableCell align="left">{first_name}</TableCell>
                        <TableCell align="left"> {last_name}</TableCell>{" "}
                        <TableCell align="left">{email}</TableCell>{" "}
                        <TableCell align="left">{company_name}</TableCell>
                        <TableCell align="center">{phone}</TableCell>{" "}
                        <TableCell align="left">
                          {" "}
                          {email !== currentUser && (
                            <td className="offline">Offline</td>
                          )}
                          {email === currentUser && (
                            <td className="online">online</td>
                          )}
                        </TableCell>{" "}
                        <TableCell align="left">
                          {view === false && (
                            <button
                              onClick={() => handleView(id)}
                              className="text-[lightgreen]  text-[1rem] font-bold"
                            >
                              View
                            </button>
                          )}
                        </TableCell>
                        <TableCell align="left">
                          <button
                            onClick={() => handleDeleteAffiliate(id)}
                            className="delete"
                          >
                            delete
                          </button>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {affiliate && view === true && (
              <div className="flex flex-col justify-center  items-center">
                <img
                  src={filterImg ? affiliateId.img : "no image"}
                  alt=""
                  className="lg:w-[650px] lg:h-[600px] lg:object-cover  object-contain"
                />

                <div className="flex flex-row gap-[5%] leading-[50px] mt-[5%]">
                  <div>
                    <h3>Name:</h3>
                    <h6>Email:</h6>
                    <h5>Address:</h5>
                    <h5>City:</h5>
                    <h5>State:</h5>
                    <h5>Country:</h5>
                    <h5>Company:</h5>
                    <h5>Contact:</h5>
                  </div>
                  <div>
                    {" "}
                    <h3>
                      {affiliateId.first_name}
                      {"  "}
                      {affiliateId.last_name}
                    </h3>
                    <h6>{affiliateId.email}</h6>
                    <h5>{affiliateId.address}</h5>
                    <h5>{affiliateId.city}</h5>
                    <h5>{affiliateId.state}</h5>
                    <h5>{affiliateId.country}</h5>
                    <h5>{affiliateId.company_name}</h5>
                    <h5> {affiliateId.phone}</h5>
                  </div>
                </div>
                {affiliateId.email !== currentUser && (
                  <td className="offline text-[2rem] my-[5%]">Offline</td>
                )}
                {affiliateId.email === currentUser && (
                  <td className="online text-[2rem] my-[5%]">online</td>
                )}
                <div className="w-[50%] flex flex-row justify-between">
                  {view === true && (
                    <button onClick={() => setView(false)} className="close">
                      close
                    </button>
                  )}

                  <button
                    onClick={() => handleDeleteAffiliate(id)}
                    className="delete"
                  >
                    delete
                  </button>
                </div>
              </div>
            )}
            {!users == null && (
              <div className="loaderDiv">
                <p> sorry trying to upload user,please wait a minute</p>
                <p className="loader"></p>
              </div>
            )}
          </div>
        )}
        {visa && (
          <div className="productWrapper">
            {delete_User && <p className="">{delete_User}</p>}

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="bg-[purple]">
                    <TableCell>Image</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Last name</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Contact</TableCell>{" "}
                    <TableCell align="left">Status</TableCell>{" "}
                    <TableCell align="left">Details</TableCell>{" "}
                    <TableCell align="left">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {visaDoc?.map(
                    ({ img, firstname, lastname, email, phone, id }, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <img
                            src={filterImg ? img : "no image"}
                            alt=""
                            className={
                              email === currentUser
                                ? "Authoronline"
                                : "AuthoriOffline"
                            }
                          />
                        </TableCell>
                        <TableCell align="left">{firstname}</TableCell>
                        <TableCell align="left">{lastname}</TableCell>{" "}
                        <TableCell align="left">{email}</TableCell>
                        <TableCell align="center">{phone}</TableCell>{" "}
                        <TableCell align="left">
                          {" "}
                          {email !== currentUser && (
                            <td className="offline">Pending</td>
                          )}
                          {email === currentUser && (
                            <td className="online">Completed</td>
                          )}
                        </TableCell>{" "}
                        <TableCell align="left">
                          {view === false && (
                            <button
                              onClick={() => handleVisaView(id)}
                              className="text-[lightgreen]  text-[1rem] font-bold"
                            >
                              View
                            </button>
                          )}
                        </TableCell>
                        <TableCell align="left">
                          <button
                            onClick={() => handleDeleteVisa(id)}
                            className="delete"
                          >
                            delete
                          </button>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {visaDoc && viewVisa === true && (
              <div className="flex flex-col justify-center w-[100%]">
                <img
                  src={filterImg ? visaId.img : "no image"}
                  alt=""
                  className="lg:w-[650px] lg:h-[600px] lg:object-cover  object-contain"
                />

                <div className="flex flex-row gap-[5%] leading-[50px] mt-[5%]">
                  <div>
                    <h3>Name:</h3>
                    <h6>Email:</h6>
                    <h5>Contact:</h5>
                    <h5>Application date:</h5>
                    <h5>Country:</h5>
                    <h5>Passport country:</h5>
                    <h5>Passport Number:</h5>
                    <h5>Departure date:</h5>
                    <h5>Return date:</h5>
                    <h5>Message:</h5>
                  </div>
                  <div>
                    {" "}
                    <h3>
                      {visaId.firstname}
                      {"  "}
                      {visaId.lastname}
                    </h3>
                    <h6>{visaId.email}</h6>
                    <h5> {visaId.phone}</h5>
                    <h5>{visaId.day}</h5>
                    <h5>{visaId.destination_country}</h5>
                    <h5>{visaId.passport_country}</h5>
                    <h5>{visaId.passport_number}</h5>
                    <h5>{visaId.depart_date}</h5>
                    <h5>{visaId.return_date}</h5>
                    <h5>{visaId.message}</h5>
                  </div>
                </div>
                {visaId.email !== currentUser && (
                  <td className="offline text-[2rem] my-[5%]">Offline</td>
                )}
                {visaId.email === currentUser && (
                  <td className="online text-[2rem] my-[5%]">online</td>
                )}
                <div className="w-[50%] flex flex-row justify-between">
                  {viewVisa === true && (
                    <button
                      onClick={() => setViewVisa(false)}
                      className="close"
                    >
                      close
                    </button>
                  )}

                  <button
                    onClick={() => handleDeleteVisa(id)}
                    className="delete"
                  >
                    delete
                  </button>
                </div>
              </div>
            )}
            {!users == null && (
              <div className="loaderDiv">
                <p> sorry trying to upload user,please wait a minute</p>
                <p className="loader"></p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
