"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_applications_chat_chats_module_ts"],{

/***/ 87028:
/*!*******************************************!*\
  !*** ./src/app/_api/chat/chat.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 26009);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);




class ChatService {
  constructor(afs) {
    this.afs = afs;
  }
  getChats() {
    return this.afs.collection('chatroom').snapshotChanges();
  }
  createChatRoom(data) {
    return this.afs.collection('chatroom').add(data);
  }
  showChat(id) {
    const chat = this.afs.doc('chatroom/' + id);
    return chat.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(changes => {
      const data = changes.payload.data();
      const chatId = changes.payload.id;
      return Object.assign({
        chatId
      }, data);
    }));
  }
  sendMessage(chatId, data) {
    return this.afs.collection('chatroom').doc(chatId).update({
      chatHistory: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(data)
    });
  }
  updateChatStatus(chatId, history) {
    return this.afs.collection('chatroom').doc(chatId).update({
      chatHistory: history
    });
  }
}
ChatService.ɵfac = function ChatService_Factory(t) {
  return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore));
};
ChatService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ChatService,
  factory: ChatService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 87088:
/*!**************************************************************!*\
  !*** ./src/app/content/applications/chat/chats.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsComponent": () => (/* binding */ ChatsComponent)
/* harmony export */ });
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_helpers/app.constants */ 39126);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _src_app_api_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/app/_api/user/user.service */ 15496);
/* harmony import */ var _src_app_api_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/app/_api/chat/chat.service */ 87028);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);











const _c0 = ["chatPS"];
const _c1 = ["content"];
const _c2 = ["messages"];
function ChatsComponent_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 95);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.loggedInUser.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ChatsComponent_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 96);
  }
}
function ChatsComponent_img_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 97);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r2.loggedInUser.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ChatsComponent_img_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 98);
  }
}
function ChatsComponent_li_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_li_86_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const chat_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.loadMyChatRoom(chat_r10));
    })("click", function ChatsComponent_li_86_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.contentOverlay($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 29)(2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 101)(4, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 102)(6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chat_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", chat_r10.uid === ctx_r4.clickedUser ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", chat_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](chat_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](chat_r10.unreadMessageCount ? chat_r10.unreadMessageCount : "");
  }
}
function ChatsComponent_li_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_li_91_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const contact_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.showChat(contact_r14));
    })("click", function ChatsComponent_li_91_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.contentOverlay($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 29)(2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 101)(4, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 102)(6, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const contact_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", contact_r14.uid === ctx_r5.clickedUser ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", contact_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contact_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", contact_r14.showMessage, "");
  }
}
function ChatsComponent_div_137_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 114);
  }
  if (rf & 2) {
    const messages_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", messages_r18.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ChatsComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 107)(1, "div", 108)(2, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ChatsComponent_div_137_img_3_Template, 1, 1, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 111)(5, "div", 112)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const messages_r18 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r8.currentUserUid === messages_r18.uid ? "chat-right" : "chat-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", messages_r18.userImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](messages_r18.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 5, messages_r18.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 7, messages_r18.date, "HH:mm a"));
  }
}
class ChatsComponent {
  /**
   * Constructor
   *
   * @param ApplicationApiService  chatApiService;
   * @param Renderer2              renderer
   */
  constructor(renderer, userService, chatService) {
    this.renderer = renderer;
    this.userService = userService;
    this.chatService = chatService;
    this.status = true;
    this.newMessage = '';
    this.config = {
      wheelPropagation: false
    };
    this.contactList = [];
    this.contactChats = [];
    this.showChatInProgress = false;
    this.createInProgress = false;
    this.contactMaster = this.contactList;
    this.chatListMaster = [];
    this.temp = [];
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserUid = this.loggedInUser.uid;
    this.currentUser = ''; // UID of user 1
    this.clickedUser = ''; // UID of user 2
    this.chatList = [];
    this.displayChat = [];
    this.chatId = '';
    this.senderImage = '';
    this.currentUserImage = '';
    this.loadContacts = false;
    this.prevMsg = '';
    /**
     * Chat scroll to bottom
     */
    this.scrollToBottom = () => {
      try {
        this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
        this.chatPS.directiveRef.scrollToBottom(0, 500);
      } catch (err) {}
    };
  }
  /**
   * Scroll chat to bottom
   */
  ngAfterViewInit() {
    this.messages.forEach(this.scrollToBottom);
    this.messages.changes.subscribe(this.scrollToBottom);
  }
  getLoggedInUserChats() {
    if (this.contactChats) {
      const chatsWithHistory = this.contactChats.filter(item => {
        return item.chatHistory.length > 0;
      });
      const loggedInUserChats = chatsWithHistory.filter(chatHistory => {
        return chatHistory.name.indexOf(this.loggedInUser.uid) !== -1;
      });
      return loggedInUserChats;
    }
    return [];
  }
  /**
   * OnInit
   */
  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      let contactList = users.map(item => {
        return Object.assign(Object.assign({}, item.payload.doc.data()), {
          id: item.payload.doc['id']
        });
      });
      contactList = contactList.filter(element => {
        return this.loggedInUser.uid !== element['uid'];
      });
      this.contactMaster = contactList;
      this.chatService.getChats().subscribe(chats => {
        this.chatList = [];
        this.contactList = [];
        const chatRooms = chats.map(item => {
          return Object.assign(Object.assign({}, item.payload.doc.data()), {
            id: item.payload.doc['id']
          });
        });
        this.contactChats = chatRooms;
        const loggedInUserChats = this.getLoggedInUserChats();
        const contactListMap = [];
        const chatListMap = [];
        this.contactMaster.forEach(element => {
          const userChat = this.isChatExistsWithUser(loggedInUserChats, element.uid);
          if (userChat && !chatListMap[element.uid]) {
            element['chatRoomId'] = userChat['id'];
            if (userChat['chatHistory'] && userChat['chatHistory'].length > 0) {
              const unreadMessages = userChat['chatHistory'].filter(history => {
                return history.uid !== this.loggedInUser.uid && history.status === 'send';
              });
              if (unreadMessages.length > 0 && this.clickedUser !== element.uid) {
                element['unreadMessageCount'] = unreadMessages.length;
              } else {
                element['unreadMessageCount'] = 0;
              }
              element['chatHistory'] = userChat['chatHistory'];
            }
            chatListMap[element.uid] = true;
            this.chatList.push(element);
            this.chatListMaster.push(element);
          } else if (!contactListMap[element.uid]) {
            contactListMap[element.uid] = true;
            this.contactList.push(element);
          }
        });
        this.chatList = lodash__WEBPACK_IMPORTED_MODULE_1__.orderBy(this.chatList, [user => user.name.toLowerCase()], ['asc']);
        this.contactList = lodash__WEBPACK_IMPORTED_MODULE_1__.orderBy(this.contactList, [user => user.name && user.name.toLowerCase()], ['asc']);
        this.currentUserImage = this.loggedInUser.photoURL;
        this.senderImage = this.contactList[0].image;
        this.createInProgress = false;
      });
    });
  }
  isChatExistsWithUser(userChats, userId) {
    for (let index = 0; index < userChats.length; index++) {
      if (userChats[index].name.indexOf(userId) !== -1) {
        return userChats[index];
      }
    }
    return false;
  }
  /**
   * Filter Chat
   *
   * @param event     search event
   */
  searchContact(event) {
    const value = event.target.value.toLowerCase();
    // filter our data
    let temp = this.contactMaster.filter(function (d) {
      return d.name && d.name.toLowerCase().indexOf(value) !== -1 || !value;
    });
    const loggedInUserChats = this.getLoggedInUserChats();
    const _self = this;
    temp = temp.filter(function (user) {
      return !_self.isChatExistsWithUser(loggedInUserChats, user.uid);
    });
    // update the rows
    this.contactList = [];
    const contactListMap = [];
    temp.forEach(element => {
      if (!contactListMap[element.uid]) {
        contactListMap[element.uid] = true;
        this.contactList.push(element);
      }
    });
    // filter our data
    const tempChat = this.chatListMaster.filter(function (d) {
      return d.name && d.name.toLowerCase().indexOf(value) !== -1 || !value;
    });
    // update the rows
    this.chatList = [];
    const chatListMap = [];
    tempChat.forEach(element => {
      if (!chatListMap[element.uid]) {
        chatListMap[element.uid] = true;
        this.chatList.push(element);
      }
    });
  }
  /**
   * Send message
   */
  sendMessage() {
    if (this.newMessage !== null && this.newMessage !== '') {
      this.messageInfo = {
        message: this.newMessage,
        date: Date.now(),
        uid: this.loggedInUser.uid,
        status: 'send'
      };
      if (this.chatId !== '') {
        this.chatService.sendMessage(this.chatId, this.messageInfo);
      } else {
        this.currentUser = this.loggedInUser.uid;
        const roomName = this.currentUser < this.clickedUser ? this.currentUser + '_' + this.clickedUser : this.clickedUser + '_' + this.currentUser;
        this.userInfo = {
          uid: this.loggedInUser.uid,
          name: roomName,
          image: this.loggedInUser.photoURL,
          time: Date.now(),
          showMessage: '',
          badge: '',
          showicon: true,
          isicon: false,
          isactive: 'online',
          isSelected: false,
          chatHistory: []
        };
        // Add message to box before sending
        this.displayChat.push(this.messageInfo);
        this.createInProgress = true;
        this.chatService.createChatRoom(this.userInfo).then(chatRoom => {
          this.chatId = chatRoom.id;
          this.loadChatRoom(chatRoom.id);
          this.chatService.sendMessage(this.chatId, this.messageInfo);
          this.createInProgress = false;
        });
      }
      this.newMessage = null;
    }
  }
  /**
   * Message send on Enter
   *
   * @param value       New message
   */
  onEnter(value) {
    this.newMessage = value;
    this.sendMessage();
  }
  /**
   * Display chat when click on contact
   *
   * @param friendId      Friend id
   */
  showChat(data) {
    if (this.showChatInProgress || this.createInProgress) {
      return;
    }
    this.showChatInProgress = true;
    this.currentUser = this.loggedInUser.uid;
    this.currentUserImage = this.loggedInUser.photoURL;
    this.clickedUser = data.uid;
    this.contactId = data.id;
    this.senderImage = data.image;
    this.showHeaderData();
    const roomName = this.currentUser < this.clickedUser ? this.currentUser + '_' + this.clickedUser : this.clickedUser + '_' + this.currentUser;
    this.userInfo = {
      uid: this.loggedInUser.uid,
      name: roomName,
      image: this.loggedInUser.photoURL,
      time: Date.now(),
      showMessage: '',
      badge: '',
      showicon: true,
      isicon: false,
      isactive: 'online',
      isSelected: false,
      chatHistory: []
    };
    if (this.contactChats.length === 0) {
      this.createAndLoadChatRoom();
    } else if (this.contactChats.length !== 0) {
      let chatExists = false;
      for (let i = 0; i < this.contactChats.length; i++) {
        const room = this.contactChats[i].name;
        if (room === roomName) {
          chatExists = true;
          this.chatId = this.contactChats[i].id;
          break;
        }
      }
      if (!chatExists) {
        this.createAndLoadChatRoom();
      } else {
        // subscribe
        this.loadChatRoom(this.chatId);
        this.showChatInProgress = false;
        this.userInfo.isSelected = true;
      }
    }
  }
  createAndLoadChatRoom() {
    this.createInProgress = true;
    this.chatService.createChatRoom(this.userInfo).then(chatRoom => {
      this.chatId = chatRoom.id;
      this.loadChatRoom(chatRoom.id);
    });
  }
  setUserImage(chatHistory) {
    for (let i = 0; i < chatHistory.length; i++) {
      if (chatHistory.length > 0) {
        if (i > 0) {
          this.prevMsg = chatHistory[i - 1];
        }
        if (i > 0 && chatHistory[i].uid === this.prevMsg['uid']) {
          continue;
        }
        if (chatHistory[i].uid === this.loggedInUser.uid) {
          chatHistory[i]['userImage'] = this.currentUserImage;
        } else {
          chatHistory[i]['userImage'] = this.senderImage;
        }
      }
    }
  }
  loadMyChatRoom(selectedUser) {
    this.chatId = selectedUser.chatRoomId;
    this.loadChatRoom(selectedUser.chatRoomId);
    this.clickedUser = selectedUser.uid;
    this.contactId = selectedUser.id;
    this.senderImage = selectedUser.image;
    this.headerName = selectedUser.name;
    this.headerImage = selectedUser.image;
    this.setHistoryAsRead(selectedUser, selectedUser.chatRoomId, selectedUser.chatHistory);
  }
  setHistoryAsRead(selectedUser, chatRoomId, history) {
    let unreadMsgExists = false;
    history.forEach(element => {
      if (element.uid !== this.loggedInUser.uid && element.status !== 'read') {
        element.status = 'read';
        unreadMsgExists = true;
      }
    });
    if (unreadMsgExists) {
      this.chatService.updateChatStatus(chatRoomId, history).then(result => {
        delete selectedUser.unreadMessageCount;
      });
    }
  }
  loadChatRoom(chatRoomId) {
    this.chatService.showChat(chatRoomId).subscribe(res => {
      if (chatRoomId === this.chatId) {
        this.setUserImage(res.chatHistory);
        this.displayChat = res['chatHistory'];
        this.chatId = res['chatId'];
      }
      this.showChatInProgress = false;
      this.scrollToBottom();
    });
  }
  showDefaultChat() {
    this.currentUser = this.loggedInUser.uid;
    const roomName = this.currentUser < this.clickedUser ? this.currentUser + '_' + this.clickedUser : this.clickedUser + '_' + this.currentUser;
    for (let j = 0; j < this.contactChats.length; j++) {
      if (this.contactChats[j].name === roomName) {
        if (this.contactChats[j].chatHistory && this.contactChats[j].chatHistory.length > 0) {
          this.displayChat = this.contactChats[j].chatHistory;
          this.setUserImage(this.contactChats[j].chatHistory);
        }
        this.chatId = this.contactChats[j].id;
      }
    }
  }
  showLastMessage() {
    for (let i = 0; i < this.contactList.length; i++) {
      if (this.contactList[i]) {
        for (let j = 0; j < this.contactChats.length; j++) {
          const room = this.contactChats[j].name;
          const index = room.indexOf(this.contactList[i].uid);
          const currentUser = this.loggedInUser.uid;
          const userUid = this.contactList[i].uid;
          const roomName = currentUser < userUid ? currentUser + '_' + userUid : userUid + '_' + currentUser;
          if (index >= 0) {
            if (this.contactChats[j].chatHistory.length > 0 && roomName === room) {
              this.contactList[i]['lastmsg'] = this.contactChats[j].chatHistory[this.contactChats[j].chatHistory.length - 1].message;
              this.contactList[i]['isActive'] = this.contactChats[j].isactive;
              this.contactList[i]['icon'] = this.contactChats[j].isicon;
              this.contactList[i]['showicon'] = this.contactChats[j].showicon;
              this.contactList[i]['lastmsgTime'] = this.contactChats[j].chatHistory[this.contactChats[j].chatHistory.length - 1].date;
            }
          }
        }
      }
    }
  }
  /**
   * Overlay add/remove fuction in responsive
   *
   * @param event     Overlay click event
   */
  contentOverlay(event) {
    const toggleIcon = document.getElementById('chat-overlay1');
    const toggle = document.getElementById('chat-area d-none');
    if (event.currentTarget.className === 'chatSidebar ng-star-inserted') {
      this.renderer.addClass(toggleIcon, 'd-none');
      this.renderer.removeClass(toggle, 'd-none');
    }
  }
  /**
  * Show add/remove class at open profile
  *
  * @param event    Overlay click event
  */
  showProfile(event) {
    const toggleIcon = document.getElementById('user-profile');
    const toggle = document.getElementById('overlayChat');
    if (event.currentTarget.className === 'chat-sidebar-profile-toggle') {
      this.renderer.addClass(toggleIcon, 'show');
      this.renderer.addClass(toggle, 'show');
    } else if (event.currentTarget.className === 'chat-profile-close') {
      this.renderer.removeClass(toggleIcon, 'show');
      this.renderer.removeClass(toggle, 'show');
    }
  }
  /**
   * Show add/remove function in responsive
   *
   * @param event    Overlay click event
   */
  Sidebar(event) {
    const toggleChat = document.getElementById('sidebar-card');
    const toggleIcon = document.getElementById('chat-profile');
    const toggle = document.getElementById('overlayChat');
    if (event.currentTarget.className === 'chat-sidebar-close' || 'chat-overlay') {
      this.renderer.removeClass(toggle, 'show');
      this.renderer.removeClass(toggleIcon, 'show');
      this.renderer.removeClass(toggleChat, 'show');
    }
  }
  /**
  * Show add/remove function in responsive
  *
  * @param event    Overlay click event
  */
  showSidebar(event) {
    if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      const toggleIcon = document.getElementById('sidebar-card');
      const toggle = document.getElementById('overlayChat');
      const toggleChat = document.getElementById('sidebar-left');
      if (event.currentTarget.className === 'ficon feather ft-message-square chat-sidebar-toggle chat-start-icon font-large-3 p-3 mb-1' || 'ficon feather ft-align-justify font-large-1 cursor-pointer') {
        this.renderer.addClass(toggle, 'show');
        this.renderer.addClass(toggleIcon, 'show');
      }
      if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH) {
        this.renderer.removeClass(toggleChat, 'sidebar-fixed');
      }
    }
  }
  // FixChat() {
  //   const toggleIcon = document.getElementById('sidebar-left');
  //   if (window.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH) {
  //     this.renderer.removeClass(toggleIcon, 'sidebar-fixed');
  //   }
  // }
  chatFavorite(event) {
    const chatIcon = document.getElementById('chat-icon');
    if (event.currentTarget.className === 'chat-icon-favorite') {
      this.renderer.addClass(chatIcon, 'warning');
    } else if (event.currentTarget.className === 'chat-icon-favorite warning') {
      this.renderer.removeClass(chatIcon, 'warning');
    }
  }
  showHeaderData() {
    this.contactList.forEach(element => {
      if (this.clickedUser === element['uid']) {
        this.headerName = element.name;
        this.headerImage = element.image;
      }
    });
  }
  /**
    * Show add/remove function
    *
    * @param event    Overlay click event
    */
  ShowChatProfile(event) {
    const toggleIcon = document.getElementById('chat-profile');
    const toggle = document.getElementById('overlayChat');
    if (event.currentTarget.className === 'avatar chat-profile-toggle m-0 mr-1') {
      this.renderer.addClass(toggleIcon, 'show');
      this.renderer.addClass(toggle, 'show');
    }
  }
  /**
    * Show add/remove function
    *
    * @param event    Overlay click event
    */
  ChatProfile(event) {
    const toggleIcon = document.getElementById('chat-profile');
    const toggle = document.getElementById('overlayChat');
    if (event.currentTarget.className === 'chat-profile-close') {
      this.renderer.removeClass(toggleIcon, 'show');
      this.renderer.removeClass(toggle, 'show');
    }
  }
}
ChatsComponent.ɵfac = function ChatsComponent_Factory(t) {
  return new (t || ChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_src_app_api_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_src_app_api_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__.ChatService));
};
ChatsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ChatsComponent,
  selectors: [["app-chat"]],
  viewQuery: function ChatsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chatPS = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.messages = _t);
    }
  },
  decls: 170,
  vars: 18,
  consts: [[1, "app-content", "content"], ["id", "sidebar-left", 1, "sidebar-left"], [1, "sidebar"], ["id", "user-profile", 1, "chat-user-profile"], [1, "chat-user-profile-header", "text-center", "border-bottom"], [1, "chat-profile-close", 3, "click"], [1, "ficon", "feather", "ft-x"], [1, "my-2"], ["class", "round mb-1", "alt", "user_avatar", "height", "100", "width", "100", 3, "src", 4, "ngIf"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "class", "round mb-1", "alt", "user_avatar", "alt", "avatar", "height", "100", "width", "100", 4, "ngIf"], [1, "mb-0"], [1, "chat-user-profile-content"], ["fxFlex", "auto", 1, "chat-user-profile-scroll", 3, "perfectScrollbar"], [1, "text-uppercase", "mb-1"], [1, "mb-2"], [1, "list-unstyled", "mb-2"], [1, "mb-25"], ["href", ""], [1, "list-unstyled"], [1, "mb-50"], ["href", "", 1, "d-flex", "align-items-center"], [1, "ficon", "feather", "ft-tag", "mr-50"], [1, "ficon", "feather", "ft-star", "mr-50"], [1, "ficon", "feather", "ft-image", "mr-50"], [1, "ficon", "feather", "ft-trash-2", "mr-50"], [1, "ficon", "feather", "ft-x-circle", "mr-50"], ["id", "sidebar-card", 1, "chat-sidebar", "card"], [1, "chat-sidebar-close", 3, "click"], [1, "chat-sidebar-search"], [1, "d-flex", "align-items-center"], [1, "chat-sidebar-profile-toggle", 3, "click"], [1, "avatar"], ["class", "cursor-pointer", "alt", "user_avatar", "height", "36", "width", "36", 3, "src", 4, "ngIf"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "alt", "avatar", "height", "36", "width", "36", 4, "ngIf"], [1, "form-group", "position-relative", "has-icon-left", "mx-75", "mb-0"], ["type", "text", "id", "chat-search", "placeholder", "Search", 1, "form-control", "round", 3, "keyup"], [1, "form-control-position"], [1, "ficon", "feather", "ft-search", "text-dark"], ["fxFlex", "auto", 1, "chat-sidebar-list-wrapper", "pt-2", 3, "perfectScrollbar"], [1, "px-2", "pb-25", "mb-0"], [1, "ficon", "feather", "ft-plus", "float-right", "cursor-pointer"], [1, "chat-sidebar-list"], [1, "px-2", "pt-2", "pb-25", "mb-0"], ["class", "chatSidebar", "id", "users-list", "id", "_media", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "chatSidebar", "id", "_media", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content-right"], [1, "content-overlay"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], ["id", "overlayChat", 1, "chat-overlay", 3, "click"], [1, "chat-window-wrapper"], ["id", "chat-overlay1", 1, "chat-start"], [1, "ficon", "feather", "ft-message-square", "chat-sidebar-toggle", "chat-start-icon", "font-large-3", "p-3", "mb-1", 3, "click"], [1, "d-none", "d-lg-block", "py-50", "text-bold-500"], [1, "btn", "btn-light-primary", "chat-start-text", "chat-sidebar-toggle", "d-block", "d-lg-none", "py-50", "px-1", 3, "click"], ["id", "chat-area d-none", 1, "chat-area", "d-none"], [1, "chat-header"], [1, "d-flex", "justify-content-between", "align-items-center", "px-1", "py-75"], ["id", "chat-sidebar", 1, "chat-sidebar-toggle", "d-block", "d-lg-none", "mr-1"], [1, "ficon", "feather", "ft-align-justify", "font-large-1", "cursor-pointer", 3, "click"], [1, "avatar", "chat-profile-toggle", "m-0", "mr-1", 3, "click"], ["alt", "avatar", 1, "cursor-pointer", 3, "src"], [1, "avatar-status-busy"], [1, "chat-header-icons"], ["id", "chat-icon", 1, "chat-icon-favorite", 3, "click"], [1, "ficon", "feather", "ft-star", "font-medium-5", "cursor-pointer"], [1, "dropdown"], ["ngbDropdown", "", 1, "d-inline-block", 3, "open", "autoClose"], ["id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-left", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "ficon", "feather", "ft-more-vertical", "font-medium-4", "ml-25", "cursor-pointer", "dropdown-toggle", "nav-hide-arrow", "cursor-pointer"], ["ngbDropdownMenu", "dropdownMenuButton"], [1, "dropdown-item"], [1, "card", "chat-wrapper", "shadow-none", "mb-0"], [1, "card-content"], ["id", "componentRef", 1, "card-body", "chat-container"], [3, "config"], ["chatPS", ""], [1, "chat-content"], ["content", ""], ["id", "chatWindow", "class", "chat", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card-footer", "chat-footer", "px-2", "py-1", "pb-0"], [1, "ficon", "feather", "ft-user", "cursor-pointer"], [1, "ficon", "feather", "ft-paperclip", "ml-1", "cursor-pointer"], ["type", "text", "name", "newmessage", "id", "iconLeft4", "placeholder", "Type your message here....", 1, "form-control", "chat-message-send", "mx-1", 3, "ngModel", "ngModelChange", "keyup.enter"], ["box", ""], ["type", "submit", 1, "btn", "btn-primary", "glow", "send", "d-lg-flex", 3, "click"], [1, "ficon", "feather", "ft-play"], [1, "d-none", "d-lg-block", "mx-50"], ["id", "chat-profile", 1, "chat-profile"], [1, "chat-profile-header", "text-center", "border-bottom"], ["alt", "chat avatar", "height", "100", "width", "100", 1, "round", "mb-1", 3, "src"], [1, "app-chat-user-name", "mb-0"], [1, "chat-profile-content", "p-2"], [1, "mt-1"], [1, "mt-2"], ["alt", "user_avatar", "height", "100", "width", "100", 1, "round", "mb-1", 3, "src"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "alt", "user_avatar", "alt", "avatar", "height", "100", "width", "100", 1, "round", "mb-1"], ["alt", "user_avatar", "height", "36", "width", "36", 1, "cursor-pointer", 3, "src"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "alt", "avatar", "height", "36", "width", "36"], ["id", "users-list", "id", "_media", 1, "chatSidebar", 3, "ngClass", "click"], [1, "avatar", "m-0", "mr-50"], ["height", "36", "width", "36", 3, "src"], [1, "chat-sidebar-name"], [1, "badge", "badge-pill", "float-right", "badge-danger", "mr-2"], [1, "text-muted"], ["id", "_media", 1, "chatSidebar", 3, "ngClass", "click"], [1, "avatar-status-away"], ["id", "chatWindow", 1, "chat", 3, "ngClass"], [1, "chat-avatar"], [1, "avatar", "m-0", 3, "routerLink"], [3, "src", 4, "ngIf"], [1, "chat-body"], [1, "chat-message"], [1, "chat-time", 3, "title"], [3, "src"]],
  template: function ChatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "header", 4)(5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_5_listener($event) {
        return ctx.showProfile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ChatsComponent_img_8_Template, 1, 1, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ChatsComponent_img_9_Template, 1, 0, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "h6", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "ABOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "It is a long established fact that a reader will be distracted by the readable content .");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "PERSONAL INFORAMTION");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ul", 15)(23, "li", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "email@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "+1(789) 950 -7654");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "h6", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "CHANNELS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ul", 15)(30, "li")(31, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "# Devlopers");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li")(34, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "# Designers");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h6", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "SETTINGS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "ul", 18)(39, "li", 19)(40, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Add Tag");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "li", 19)(44, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, " Important Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li", 19)(48, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " Shared Documents");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "li", 19)(52, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, " Deleted Documents");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "li")(56, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, " Blocked Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 26)(60, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_60_listener($event) {
        return ctx.Sidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 28)(63, "div", 29)(64, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_Template_div_click_64_listener($event) {
        return ctx.showProfile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, ChatsComponent_img_66_Template, 1, 1, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, ChatsComponent_img_67_Template, 1, 0, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "fieldset", 34)(69, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function ChatsComponent_Template_input_keyup_69_listener($event) {
        return ctx.searchContact($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 38)(73, "h6", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "CHANNELS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "ul", 41)(77, "li")(78, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "# Devlopers");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "li")(81, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "# Designers");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "h6", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "CHATS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "ul", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, ChatsComponent_li_86_Template, 11, 4, "li", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "h6", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "CONTACTS");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "ul", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](91, ChatsComponent_li_91_Template, 10, 4, "li", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 49)(97, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_Template_div_click_97_listener($event) {
        return ctx.Sidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "section", 51)(99, "div", 52)(100, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_100_listener($event) {
        return ctx.showSidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "h4", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Select a contact to start a chat!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "button", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_Template_button_click_103_listener($event) {
        return ctx.showSidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Start Conversation!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 56)(106, "div", 57)(107, "header", 58)(108, "div", 29)(109, "div", 59)(110, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_Template_i_click_110_listener($event) {
        return ctx.showSidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_Template_div_click_111_listener($event) {
        return ctx.ShowChatProfile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "span", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "h6", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 64)(118, "span", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_118_listener($event) {
        return ctx.chatFavorite($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](119, "i", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "span", 67)(121, "span", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](122, "i", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 70)(124, "a", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Pin to top");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "a", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "Delete chat");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "a", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Block");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "div", 72)(131, "div", 73)(132, "div", 74)(133, "perfect-scrollbar", 75, 76)(135, "div", 77, 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](137, ChatsComponent_div_137_Template, 12, 10, "div", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "div", 80)(139, "form", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](140, "i", 81)(141, "i", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "input", 83, 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ChatsComponent_Template_input_ngModelChange_142_listener($event) {
        return ctx.newMessage = $event;
      })("keyup.enter", function ChatsComponent_Template_input_keyup_enter_142_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](143);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onEnter(_r9.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "button", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_Template_button_click_144_listener() {
        return ctx.sendMessage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](145, "i", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "span", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "section", 88)(149, "header", 89)(150, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatsComponent_Template_span_click_150_listener($event) {
        return ctx.ChatProfile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](151, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](153, "img", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "h5", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "Devloper");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "div", 92)(159, "h6", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, "ABOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "It is a long established fact that a reader will be distracted by the readable content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "h6", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, "PERSONAL INFORMATION");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "ul", 18)(166, "li", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, "email@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](168, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](169, "+1(789) 950-7654");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loggedInUser.photoURL);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loggedInUser.photoURL);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.loggedInUser.displayName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loggedInUser.photoURL);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loggedInUser.photoURL);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.chatList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.contactList);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.headerImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.headerName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("open", false)("autoClose", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.displayChat);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.headerImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.headerName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: ["[_nghost-%COMP%]     .content-right {\n  width: calc(100% - 300px) !important;\n}\n [_nghost-%COMP%]     .mx-75 {\n    margin-left: .75rem!important;\n    margin-right: .75rem!important;\n  }\n  [_nghost-%COMP%]     .py-75 {\n    padding-bottom: .75rem!important;\n    padding-top: .75rem!important;\n  }\n  [_nghost-%COMP%]     .px-1 {\n    padding-left: 1rem!important;\n    padding-right: 1rem!important;\n  }\n  [_nghost-%COMP%]     .mr-50, .mx-50[_ngcontent-%COMP%] {\n    margin-right: .5rem!important;\n    margin-left: .5rem!important;\n  }\n  [_nghost-%COMP%]     .mb-50, .my-50[_ngcontent-%COMP%] {\n    margin-bottom: .5rem!important;\n  }\n  [_nghost-%COMP%]     .dropdown-menu\n  {\n    transform: translate3d(-131px, 18px, 0px) !important;\n  }\n  [_nghost-%COMP%]     .chat-sidebar .chat-sidebar-list-wrapper {\n     overflow-y: scroll;\n  }\n  [_nghost-%COMP%]     .sidebar-fixed {\n    overflow: hidden !important;\n    width: 300px;\n  }\n\n  [_nghost-%COMP%]     .app-content {\n     overflow-y: hidden !important;\n  }\n  [_nghost-%COMP%]     .pb-25, .py-25[_ngcontent-%COMP%] {\n    padding-bottom: .25rem!important;\n  }\n  [_nghost-%COMP%]     .ml-25, .mx-25[_ngcontent-%COMP%] {\n    margin-left: .25rem!important;\n  }\n\n  [_nghost-%COMP%]     .ps--active-y > .ps__rail-y {\n    display: none;\n  }\n  @media(max-width:767px) {\n    [_nghost-%COMP%]     .content-right {\n      width: calc(100% - 0px) !important;\n    }\n  }\n  [_nghost-%COMP%]     .d-inline-block {\n    display: inline !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7Q0FDQztJQUNHLDZCQUE2QjtJQUM3Qiw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDRCQUE0QjtJQUM1Qiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLDZCQUE2QjtJQUM3Qiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBOztJQUVFLG9EQUFvRDtFQUN0RDtFQUNBO0tBQ0csa0JBQWtCO0VBQ3JCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsWUFBWTtFQUNkOztFQUVBO0tBQ0csNkJBQTZCO0VBQ2hDO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0U7TUFDRSxrQ0FBa0M7SUFDcEM7RUFDRjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCIiwiZmlsZSI6ImNoYXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmNvbnRlbnQtcmlnaHQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpICFpbXBvcnRhbnQ7XG59XG4gOmhvc3QgOjpuZy1kZWVwIC5teC03NSB7XG4gICAgbWFyZ2luLWxlZnQ6IC43NXJlbSFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAuNzVyZW0haW1wb3J0YW50O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucHktNzUge1xuICAgIHBhZGRpbmctYm90dG9tOiAuNzVyZW0haW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAuNzVyZW0haW1wb3J0YW50O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucHgtMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtIWltcG9ydGFudDtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLm1yLTUwLCAubXgtNTAge1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW0haW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbSFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5tYi01MCwgLm15LTUwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbSFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51XG4gIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMzFweCwgMThweCwgMHB4KSAhaW1wb3J0YW50O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuY2hhdC1zaWRlYmFyIC5jaGF0LXNpZGViYXItbGlzdC13cmFwcGVyIHtcbiAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuc2lkZWJhci1maXhlZCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCAuYXBwLWNvbnRlbnQge1xuICAgICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnBiLTI1LCAucHktMjUge1xuICAgIHBhZGRpbmctYm90dG9tOiAuMjVyZW0haW1wb3J0YW50O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAubWwtMjUsIC5teC0yNSB7XG4gICAgbWFyZ2luLWxlZnQ6IC4yNXJlbSFpbXBvcnRhbnQ7XG4gIH1cblxuICA6aG9zdCA6Om5nLWRlZXAgLnBzLS1hY3RpdmUteSA+IC5wc19fcmFpbC15IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIEBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICA6aG9zdCA6Om5nLWRlZXAgLmNvbnRlbnQtcmlnaHQge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5kLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9hcHBsaWNhdGlvbnMvY2hhdC9jaGF0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDO0NBQ0M7SUFDRyw2QkFBNkI7SUFDN0IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTs7SUFFRSxvREFBb0Q7RUFDdEQ7RUFDQTtLQUNHLGtCQUFrQjtFQUNyQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLFlBQVk7RUFDZDs7RUFFQTtLQUNHLDZCQUE2QjtFQUNoQztFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFO01BQ0Usa0NBQWtDO0lBQ3BDO0VBQ0Y7RUFDQTtJQUNFLDBCQUEwQjtFQUM1Qjs7QUFFRix3akZBQXdqRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuY29udGVudC1yaWdodCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCkgIWltcG9ydGFudDtcbn1cbiA6aG9zdCA6Om5nLWRlZXAgLm14LTc1IHtcbiAgICBtYXJnaW4tbGVmdDogLjc1cmVtIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IC43NXJlbSFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5weS03NSB7XG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbSFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IC43NXJlbSFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5weC0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0haW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0haW1wb3J0YW50O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAubXItNTAsIC5teC01MCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbSFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtIWltcG9ydGFudDtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLm1iLTUwLCAubXktNTAge1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtIWltcG9ydGFudDtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnVcbiAge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEzMXB4LCAxOHB4LCAwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5jaGF0LXNpZGViYXIgLmNoYXQtc2lkZWJhci1saXN0LXdyYXBwZXIge1xuICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5zaWRlYmFyLWZpeGVkIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgOmhvc3QgOjpuZy1kZWVwIC5hcHAtY29udGVudCB7XG4gICAgIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAucGItMjUsIC5weS0yNSB7XG4gICAgcGFkZGluZy1ib3R0b206IC4yNXJlbSFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5tbC0yNSwgLm14LTI1IHtcbiAgICBtYXJnaW4tbGVmdDogLjI1cmVtIWltcG9ydGFudDtcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCAucHMtLWFjdGl2ZS15ID4gLnBzX19yYWlsLXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xuICAgIDpob3N0IDo6bmctZGVlcCAuY29udGVudC1yaWdodCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLmQtaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 19011:
/*!***********************************************************!*\
  !*** ./src/app/content/applications/chat/chats.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsModule": () => (/* binding */ ChatsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _chats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats.component */ 87088);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_api_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_api/chat/chat.service */ 87028);
/* harmony import */ var _static_chat_static_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-chat/static-chat.component */ 11726);
/* harmony import */ var src_app_services_application_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/application-api.service */ 13780);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);













class ChatsModule {}
ChatsModule.ɵfac = function ChatsModule_Factory(t) {
  return new (t || ChatsModule)();
};
ChatsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ChatsModule
});
ChatsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [src_app_api_chat_chat_service__WEBPACK_IMPORTED_MODULE_1__.ChatService, src_app_services_application_api_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationApiService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrModule.forRoot(), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{
    path: '',
    component: _chats_component__WEBPACK_IMPORTED_MODULE_0__.ChatsComponent
  }, {
    path: 'static-chat',
    component: _static_chat_static_chat_component__WEBPACK_IMPORTED_MODULE_2__.StaticChatComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChatsModule, {
    declarations: [_chats_component__WEBPACK_IMPORTED_MODULE_0__.ChatsComponent, _static_chat_static_chat_component__WEBPACK_IMPORTED_MODULE_2__.StaticChatComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 11726:
/*!********************************************************************************!*\
  !*** ./src/app/content/applications/chat/static-chat/static-chat.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticChatComponent": () => (/* binding */ StaticChatComponent)
/* harmony export */ });
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_helpers/app.constants */ 39126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _src_app_services_application_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/app/_services/application-api.service */ 13780);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);










const _c0 = ["content"];
const _c1 = ["messages"];
const _c2 = function (a0, a1) {
  return {
    "active": a0,
    "": a1
  };
};
function StaticChatComponent_li_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_li_84_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.contentOverlay($event));
    })("click", function StaticChatComponent_li_84_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const chats_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.showChat(chats_r6.friendId, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28)(2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 86)(4, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 88)(6, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const chats_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c2, chats_r6.isSelected === true, chats_r6.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", chats_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chats_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chats_r6.showMessage);
  }
}
function StaticChatComponent_li_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_li_89_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.contentOverlay($event));
    })("click", function StaticChatComponent_li_89_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const contact_r10 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.showChat(contact_r10.friendId, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28)(2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 91)(4, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 88)(6, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const contact_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c2, contact_r10.isSelected === true, contact_r10.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", contact_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](contact_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", contact_r10.showMessage, "");
  }
}
function StaticChatComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 93)(2, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_div_106_Template_i_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.showSidebar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_div_106_Template_div_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.ShowChatProfile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chats_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", chats_r14.headerImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chats_r14.senderName);
  }
}
const _c3 = function (a0, a1) {
  return {
    "chat-right": a0,
    "chat-left": a1
  };
};
function StaticChatComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 97, 98)(2, "div", 99)(3, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 101)(6, "div", 102)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const messages_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c3, messages_r18.sender === 0, messages_r18.sender === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", messages_r18.senderImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](messages_r18.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](messages_r18.time);
  }
}
function StaticChatComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Devloper");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chats_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", chats_r20.headerImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chats_r20.senderName);
  }
}
/**
 * ChatHistory class
 */
class ChatHistory {
  constructor(message, sender, senderImage, senderName, time) {
    this.message = message;
    this.sender = sender;
    this.senderImage = senderImage;
    this.senderName = senderName;
    this.time = time;
  }
}
class ChatHeader {
  constructor(senderImage, senderName) {
    this.senderImage = senderImage;
    this.senderName = senderName;
  }
}
class ContactHeader {
  constructor(senderImage, senderName) {
    this.senderImage = senderImage;
    this.senderName = senderName;
  }
}
/**
 * Chats class
 */
class Chats {
  constructor(friendId, name, image, showMessage, _ChatHistory, chatHeader, isSelected) {
    this.friendId = friendId;
    this.name = name;
    this.image = image;
    this.showMessage = showMessage;
    this._ChatHistory = _ChatHistory;
    this.chatHeader = chatHeader;
    this.isSelected = isSelected;
  }
}
/**
 * Contact class
 */
class Contact {
  constructor(friendId, name, image, showMessage, isSelected, contactHeader) {
    this.friendId = friendId;
    this.name = name;
    this.image = image;
    this.showMessage = showMessage;
    this.isSelected = isSelected;
    this.contactHeader = contactHeader;
  }
}
class StaticChatComponent {
  /**
   * Constructor
   *
   * @param ApplicationApiService  chatApiService;
   * @param Renderer2              renderer
   */
  constructor(chatApiService, renderer, toastr) {
    this.chatApiService = chatApiService;
    this.renderer = renderer;
    this.toastr = toastr;
    this.status = true;
    this.contactChat = [];
    this.headerChat = [];
    this.Contact = [];
    this.newMessage = '';
    this.newMessageArray = [];
    this.config = {
      wheelPropagation: false
    };
    this.chatsList = [];
    this.contactList = [];
    this.temp = [];
    this.temp2 = this.chatsList;
    this.temp3 = this.contactList;
    this.ContactHeader = [];
    /**
     * Chat scroll to bottom
     */
    this.scrollToBottom = () => {
      try {
        this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
      } catch (err) {}
    };
    this.headerArray = this.chatApiService.getChatContactData().subscribe(Response => {
      this.headerArray = Response;
    });
  }
  /**
   * Scroll chat to bottom
   */
  ngAfterViewInit() {
    this.messages.forEach(this.scrollToBottom);
    this.messages.changes.subscribe(this.scrollToBottom);
  }
  /**
   * OnInit
   */
  ngOnInit() {
    this.toastr.clear();
    this.toastr.warning('', 'Please login through a personal account to experience the Live chat. We have it disabled for demo account.', {
      timeOut: 5000,
      disableTimeOut: true,
      closeButton: true
    });
    this.chatArray = this.chatApiService.getChatsData().subscribe(Response => {
      this.chatArray = Response;
      this.contactChat = this.chatArray[2].ChatHistory;
      this.chatsList.push(new Chats(2, 'Kristopher Candy', '../../../assets/images/portrait/small/avatar-s-7.png', ' Thank you', this.chatArray[1].ChatHistory, this.chatArray[1].chatHeader, false));
      this.chatsList.push(new Chats(3, 'Sarah Woods', '../../../assets/images/portrait/small/avatar-s-8.png', ' Hello krish!', this.chatArray[2].ChatHistory, this.chatArray[2].chatHeader, false));
      this.contactList.push(new Contact(1, 'Kristopher Candy', '../../../assets/images/portrait/small/avatar-s-9.png', 'lemon drops', false, this.headerArray[0].contactHeader));
      this.contactList.push(new Contact(2, 'Jenny Perich', '../../../assets/images/portrait/small/avatar-s-10.png', 'candy canes', false, this.headerArray[1].contactHeader));
      this.contactList.push(new Contact(3, 'Rock Montgomery', '../../../assets/images/portrait/small/avatar-s-11.png', 'powder gum', false, this.headerArray[2].contactHeader));
      this.contactList.push(new Contact(4, 'Heather Howell', '../../../assets/images/portrait/small/avatar-s-12.png', 'cheesecake toffee', false, this.headerArray[3].contactHeader));
    });
  }
  /**
   * Filter Chat
   *
   * @param event     search event
   */
  updateFilter(event) {
    const value = event.target.value.toLowerCase();
    this.chatsList = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.chatsList];
    // filter our data
    const temp = this.chatsList.filter(function (d) {
      return d.name.toLowerCase().indexOf(value) !== -1 || !value;
    });
    // update the rows
    this.chatsList = temp;
    // Whenever the filter changes, always go back to the first page
  }

  updateFilter1(event) {
    const value = event.target.value.toLowerCase();
    this.contactList = [...this.temp3]; // and here you have to initialize it with your data
    this.temp = [...this.contactList];
    // filter our data
    const temp = this.contactList.filter(function (d) {
      return d.name.toLowerCase().indexOf(value) !== -1 || !value;
    });
    // update the rows
    this.contactList = temp;
    // Whenever the filter changes, always go back to the first page
  }
  /**
   * Send message
   */
  sendMessage() {
    if (this.newMessage !== null && this.newMessage !== '') {
      this.contactChat.push({
        message: [this.newMessage],
        sender: 0,
        senderImage: '',
        time: '3:35AM'
      });
      this.newMessage = null;
    }
  }
  /**
   * Message send on Enter
   *
   * @param value       New message
   */
  onEnter(value) {
    this.newMessage = value;
    if (this.newMessage !== null && this.newMessage !== '') {
      this.contactChat.push({
        message: [this.newMessage],
        sender: 0,
        senderImage: '',
        time: '3:35AM'
      });
      this.newMessage = null;
    }
  }
  /**
   * Display chat when click on contact
   *
   * @param friendId      Friend id
   */
  showChat(friendId, number) {
    this.contactChat = [];
    if (number === 1) {
      for (let i = 0; i < this.chatsList.length; i++) {
        if (friendId !== this.chatsList[i].friendId) {
          this.chatsList[i].isSelected = false;
        }
        if (friendId === this.chatsList[i].friendId) {
          this.chatsList[i].isSelected = true;
        }
      }
      for (let i = 0; i < this.contactList.length; i++) {
        this.contactList[i].isSelected = false;
      }
      for (const friend of this.chatsList) {
        if (friend.friendId === friendId) {
          this.contactChat = this.chatArray[friendId - 1].ChatHistory;
          this.headerChat = this.chatArray[friendId - 1].chatHeader;
          break;
        }
      }
    } else if (number === 2) {
      for (let i = 0; i < this.contactList.length; i++) {
        if (friendId !== this.contactList[i].friendId) {
          this.contactList[i].isSelected = false;
        }
        if (friendId === this.contactList[i].friendId) {
          this.contactList[i].isSelected = true;
        }
      }
      for (let i = 0; i < this.chatsList.length; i++) {
        this.chatsList[i].isSelected = false;
      }
      this.contactChat = [];
      this.headerChat = this.headerArray[friendId - 1].contactHeader;
    }
  }
  /**
   * Overlay add/remove fuction in responsive
   *
   * @param event     Overlay click event
   */
  contentOverlay(event) {
    const toggleIcon = document.getElementById('chat-overlay1');
    const toggle = document.getElementById('chat-area d-none');
    if (event.currentTarget.className === 'chatSidebar ng-star-inserted') {
      this.renderer.addClass(toggleIcon, 'd-none');
      this.renderer.removeClass(toggle, 'd-none');
    }
  }
  /**
  * Warning add/remove class
  *
  * @param event    click event
  */
  chatFavorite(event) {
    const chatIcon = document.getElementById('chat-icon');
    if (event.currentTarget.className === 'chat-icon-favorite') {
      this.renderer.addClass(chatIcon, 'warning');
    } else if (event.currentTarget.className === 'chat-icon-favorite warning') {
      this.renderer.removeClass(chatIcon, 'warning');
    }
  }
  showContact(friendId) {
    this.contactChat = [];
    for (let i = 0; i < this.contactList.length; i++) {
      if (friendId !== this.contactList[i].friendId) {
        this.contactList[i].isSelected = false;
      }
      if (friendId === this.contactList[i].friendId) {
        this.contactList[i].isSelected = true;
      }
    }
  }
  /**
  * Show add/remove class at open profile
  *
  * @param event    Overlay click event
  */
  showProfile(event) {
    const toggleIcon = document.getElementById('user-profile');
    const toggle = document.getElementById('overlayChat');
    if (event.currentTarget.className === 'chat-sidebar-profile-toggle') {
      this.renderer.addClass(toggleIcon, 'show');
      this.renderer.addClass(toggle, 'show');
    } else if (event.currentTarget.className === 'chat-profile-close') {
      this.renderer.removeClass(toggleIcon, 'show');
      this.renderer.removeClass(toggle, 'show');
    }
  }
  /**
   * Show add/remove function in responsive
   *
   * @param event    Overlay click event
   */
  showSidebar(event) {
    if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      const toggleIcon = document.getElementById('sidebar-card');
      const toggle = document.getElementById('overlayChat');
      const toggleChat = document.getElementById('sidebar-left');
      if (event.currentTarget.className === 'ficon feather ft-message-square chat-sidebar-toggle chat-start-icon font-large-3 p-3 mb-1' || 'ficon feather ft-align-justify font-large-1 cursor-pointer') {
        this.renderer.addClass(toggle, 'show');
        this.renderer.addClass(toggleIcon, 'show');
      }
      if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH) {
        this.renderer.removeClass(toggleChat, 'sidebar-fixed');
      }
    }
  }
  /**
    * Show add/remove function in responsive
    *
    * @param event    Overlay click event
    */
  Sidebar(event) {
    const toggleChat = document.getElementById('sidebar-card');
    const toggleIcon = document.getElementById('chat-profile');
    const toggle = document.getElementById('overlayChat');
    if (event.currentTarget.className === 'chat-sidebar-close' || 'chat-overlay show') {
      this.renderer.removeClass(toggle, 'show');
      this.renderer.removeClass(toggleChat, 'show');
      this.renderer.removeClass(toggleIcon, 'show');
    }
  }
  /**
    * Show add/remove function
    *
    * @param event    Overlay click event
    */
  ShowChatProfile(event) {
    const toggleIcon = document.getElementById('chat-profile');
    const toggle = document.getElementById('overlayChat');
    if (event.currentTarget.className === 'avatar chat-profile-toggle m-0 mr-1') {
      this.renderer.addClass(toggleIcon, 'show');
      this.renderer.addClass(toggle, 'show');
    }
  }
  /**
  * Show add/remove function
  *
  * @param event    Overlay click event
  */
  ChatProfile(event) {
    const toggleIcon = document.getElementById('chat-profile');
    const toggle = document.getElementById('overlayChat');
    if (event.currentTarget.className === 'chat-profile-close') {
      this.renderer.removeClass(toggleIcon, 'show');
      this.renderer.removeClass(toggle, 'show');
    }
  }
}
StaticChatComponent.ɵfac = function StaticChatComponent_Factory(t) {
  return new (t || StaticChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_src_app_services_application_api_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
};
StaticChatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: StaticChatComponent,
  selectors: [["app-static-chat"]],
  viewQuery: function StaticChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.messages = _t);
    }
  },
  decls: 151,
  vars: 11,
  consts: [[1, "app-content", "content"], ["id", "sidebar-left", 1, "sidebar-left"], [1, "sidebar"], ["id", "user-profile", 1, "chat-user-profile"], [1, "chat-user-profile-header", "text-center", "border-bottom"], [1, "chat-profile-close", 3, "click"], [1, "ficon", "feather", "ft-x"], [1, "my-2"], ["src", "../../../assets/images/portrait/small/avatar-s-19.png", "alt", "user_avatar", "height", "100", "width", "100", 1, "round", "mb-1"], [1, "mb-0"], [1, "chat-user-profile-content"], ["fxFlex", "auto", 1, "chat-user-profile-scroll", 3, "perfectScrollbar"], [1, "text-uppercase", "mb-1"], [1, "mb-2"], [1, "list-unstyled", "mb-2"], [1, "mb-25"], ["href", ""], [1, "list-unstyled"], [1, "mb-50"], ["href", "", 1, "d-flex", "align-items-center"], [1, "ficon", "feather", "ft-tag", "mr-50"], [1, "ficon", "feather", "ft-star", "mr-50"], [1, "ficon", "feather", "ft-image", "mr-50"], [1, "ficon", "feather", "ft-trash-2", "mr-50"], [1, "ficon", "feather", "ft-x-circle", "mr-50"], ["id", "sidebar-card", 1, "chat-sidebar", "card"], [1, "chat-sidebar-close", 3, "click"], [1, "chat-sidebar-search"], [1, "d-flex", "align-items-center"], [1, "chat-sidebar-profile-toggle", 3, "click"], [1, "avatar"], ["src", "../../../assets/images/portrait/small/avatar-s-19.png", "alt", "user_avatar", "height", "36", "width", "36", 1, "cursor-pointer"], [1, "form-group", "position-relative", "has-icon-left", "mx-75", "mb-0"], ["type", "text", "id", "chat-search", "placeholder", "Search", 1, "form-control", "round", 3, "keyup"], [1, "form-control-position"], [1, "ficon", "feather", "ft-search", "text-dark"], [1, "chat-sidebar-list-wrapper", "pt-2", 2, "top", "0px", "height", "450px", 3, "perfectScrollbar"], [1, "px-2", "pb-25", "mb-0"], [1, "ficon", "feather", "ft-plus", "float-right", "cursor-pointer"], [1, "chat-sidebar-list"], [1, "px-2", "pt-2", "pb-25", "mb-0"], ["class", "chatSidebar", "id", "users-list", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "chatSidebar", "id", "_media", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "content-right"], [1, "content-overlay"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], ["id", "overlayChat", 1, "chat-overlay", 3, "click"], [1, "chat-window-wrapper"], ["id", "chat-overlay1", 1, "chat-start"], [1, "ficon", "feather", "ft-message-square", "chat-sidebar-toggle", "chat-start-icon", "font-large-3", "p-3", "mb-1", 3, "click"], [1, "d-none", "d-lg-block", "py-50", "text-bold-500"], [1, "btn", "btn-light-primary", "chat-start-text", "chat-sidebar-toggle", "d-block", "d-lg-none", "py-50", "px-1", 3, "click"], ["id", "chat-area d-none", 1, "chat-area", "d-none"], [1, "chat-header"], [1, "d-flex", "justify-content-between", "align-items-center", "px-1", "py-75"], ["class", "d-flex align-items-center", 4, "ngFor", "ngForOf"], [1, "chat-header-icons"], ["id", "chat-icon", 1, "chat-icon-favorite", 3, "click"], [1, "ficon", "feather", "ft-star", "font-medium-5", "cursor-pointer"], ["ngbDropdown", "", 1, "d-inline-block", "dropdown", 3, "open", "autoClose"], ["id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-left", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "ficon", "feather", "ft-more-vertical", "font-medium-4", "ml-25", "cursor-pointer", "dropdown-toggle", "nav-hide-arrow", "cursor-pointer"], ["ngbDropdownMenu", "dropdownMenuButton"], [1, "dropdown-item"], [1, "card", "chat-wrapper", "shadow-none", "mb-0"], [1, "card-content"], ["id", "test", "fxFlex", "auto", 1, "card-body", "chat-container", 3, "perfectScrollbar"], [1, "chat-content"], ["class", "chat", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card-footer", "chat-footer", "px-2", "py-1", "pb-0"], [1, "ficon", "feather", "ft-user", "cursor-pointer"], [1, "ficon", "feather", "ft-paperclip", "ml-1", "cursor-pointer"], ["type", "text", "name", "newmessage", "id", "iconLeft4", "placeholder", "Type your message here....", 1, "form-control", "chat-message-send", "mx-1", 3, "ngModel", "ngModelChange", "keyup.enter"], ["box", ""], ["type", "submit", 1, "btn", "btn-primary", "glow", "send", "d-lg-flex", 3, "click"], [1, "ficon", "feather", "ft-play"], [1, "d-none", "d-lg-block", "mx-50"], ["id", "chat-profile", 1, "chat-profile"], [1, "chat-profile-header", "text-center", "border-bottom"], ["class", "my-2", 4, "ngFor", "ngForOf"], [1, "chat-profile-content", "p-2"], [1, "mt-1"], [1, "mt-2"], ["id", "users-list", 1, "chatSidebar", 3, "ngClass", "click"], [1, "avatar", "m-0", "mr-50"], ["height", "36", "width", "36", "alt", "sidebar user image", 3, "src"], [1, "avatar-status-busy"], [1, "chat-sidebar-name"], [1, "text-muted"], ["id", "_media", 1, "chatSidebar", 3, "ngClass", "click"], [3, "src"], [1, "avatar-status-away"], ["id", "chat-sidebar", 1, "chat-sidebar-toggle", "d-block", "d-lg-none", "mr-1"], [1, "ficon", "feather", "ft-align-justify", "font-large-1", "cursor-pointer", 3, "click"], [1, "avatar", "chat-profile-toggle", "m-0", "mr-1", 3, "click"], ["alt", "avatar", 1, "cursor-pointer", 3, "src"], [1, "chat", 3, "ngClass"], ["messages", ""], [1, "chat-avatar"], [1, "avatar", "m-0", 3, "routerLink"], [1, "chat-body"], [1, "chat-message"], [1, "chat-time"], ["alt", "chat avatar", "height", "100", "width", "100", 1, "round", "mb-1", 3, "src"], [1, "app-chat-user-name", "mb-0"]],
  template: function StaticChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "header", 4)(5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_Template_span_click_5_listener($event) {
        return ctx.showProfile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "John Doe");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "ABOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "It is a long established fact that a reader will be distracted by the readable content .");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "PERSONAL INFORAMTION");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ul", 14)(22, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "email@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "+1(789) 950 -7654");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "CHANNELS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ul", 14)(29, "li")(30, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "# Devlopers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li")(33, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "# Designers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h6", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "SETTINGS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ul", 17)(38, "li", 18)(39, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Add Tag");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li", 18)(43, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Important Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "li", 18)(47, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Shared Documents");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li", 18)(51, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Deleted Documents");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "li")(55, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Blocked Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 25)(59, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_Template_span_click_59_listener($event) {
        return ctx.Sidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 27)(62, "div", 28)(63, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_Template_div_click_63_listener($event) {
        return ctx.showProfile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "fieldset", 32)(67, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function StaticChatComponent_Template_input_keyup_67_listener($event) {
        return ctx.updateFilter($event);
      })("keyup", function StaticChatComponent_Template_input_keyup_67_listener($event) {
        return ctx.updateFilter1($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 36)(71, "h6", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "CHANNELS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "ul", 39)(75, "li")(76, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "# Devlopers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "li")(79, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "# Designers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "h6", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "CHATS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "ul", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, StaticChatComponent_li_84_Template, 10, 7, "li", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "h6", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "CONTACTS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "ul", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, StaticChatComponent_li_89_Template, 10, 7, "li", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 47)(95, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_Template_div_click_95_listener($event) {
        return ctx.Sidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "section", 49)(97, "div", 50)(98, "span", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_Template_span_click_98_listener($event) {
        return ctx.showSidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "h4", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Select a contact to start a chat!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "button", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_Template_button_click_101_listener($event) {
        return ctx.showSidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Start Conversation!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 54)(104, "div", 55)(105, "header", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, StaticChatComponent_div_106_Template, 9, 2, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 58)(108, "span", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_Template_span_click_108_listener($event) {
        return ctx.chatFavorite($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "span", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 63)(113, "a", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Pin to top");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "a", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Delete chat");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "a", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Block");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 65)(120, "div", 66)(121, "div", 67)(122, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](123, StaticChatComponent_div_123_Template, 11, 7, "div", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 70)(125, "form", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "i", 71)(127, "i", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "input", 73, 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StaticChatComponent_Template_input_ngModelChange_128_listener($event) {
        return ctx.newMessage = $event;
      })("keyup.enter", function StaticChatComponent_Template_input_keyup_enter_128_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](129);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onEnter(_r4.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "button", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_Template_button_click_130_listener() {
        return ctx.sendMessage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "section", 78)(135, "header", 79)(136, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StaticChatComponent_Template_span_click_136_listener($event) {
        return ctx.ChatProfile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](138, StaticChatComponent_div_138_Template, 6, 2, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 81)(140, "h6", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "ABOUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "It is a long established fact that a reader will be distracted by the readable content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "h6", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "PERSONAL INFORMATION");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "ul", 17)(147, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "email@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "+1(789) 950-7654");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.chatsList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contactList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.headerChat);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("open", false)("autoClose", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contactChat);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.headerChat);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
  styles: ["[_nghost-%COMP%]     .content-right {\n  width: calc(100% - 300px) !important;\n}\n [_nghost-%COMP%]     .mx-75 {\n  margin-left: .75rem!important;\n  margin-right: .75rem!important;\n}\n[_nghost-%COMP%]     .py-75 {\n  padding-bottom: .75rem!important;\n  padding-top: .75rem!important;\n}\n[_nghost-%COMP%]     .px-1 {\n  padding-left: 1rem!important;\n  padding-right: 1rem!important;\n}\n[_nghost-%COMP%]     .mr-50, .mx-50[_ngcontent-%COMP%] {\n  margin-right: .5rem!important;\n  margin-left: .5rem!important;\n}\n[_nghost-%COMP%]     .mb-50, .my-50[_ngcontent-%COMP%] {\n  margin-bottom: .5rem!important;\n}\n[_nghost-%COMP%]     .dropdown-menu\n{\n  transform: translate3d(-131px, 18px, 0px) !important;\n}\n[_nghost-%COMP%]     .chat-sidebar .chat-sidebar-list-wrapper {\n   overflow-y: scroll;\n}\n[_nghost-%COMP%]     .sidebar-fixed {\n  overflow: hidden !important;\n  width: 300px;\n}\n\n[_nghost-%COMP%]     .app-content {\n   overflow-y: hidden !important;\n} \n[_nghost-%COMP%]     .pb-25, .py-25[_ngcontent-%COMP%] {\n  padding-bottom: .25rem!important;\n}\n[_nghost-%COMP%]     .ml-25, .mx-25[_ngcontent-%COMP%] {\n  margin-left: .25rem!important;\n}\n@media(max-width:767px) {\n  [_nghost-%COMP%]     .chat-footer\n   {\n    position: relative !important;\n    bottom: 17px !important;\n  }\n}\n@media(max-width:767px) {\n  [_nghost-%COMP%]     .chat-wrapper\n   {\n    background-color: unset !important;\n  }\n}\n\n@media(max-width:767px) {\n  [_nghost-%COMP%]     .content-right {\n    width: calc(100% - 0px) !important;\n  }\n}\n[_nghost-%COMP%]     .d-inline-block {\n  display: inline !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpYy1jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0VBQ0Msb0NBQW9DO0FBQ3RDO0NBQ0M7RUFDQyw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTs7RUFFRSxvREFBb0Q7QUFDdEQ7QUFDQTtHQUNHLGtCQUFrQjtBQUNyQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtHQUNHLDZCQUE2QjtBQUNoQztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFOztJQUVFLDZCQUE2QjtJQUM3Qix1QkFBdUI7RUFDekI7QUFDRjtBQUNBO0VBQ0U7O0lBRUUsa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtDQUFrQztFQUNwQztBQUNGO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3RhdGljLWNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuIDpob3N0IDo6bmctZGVlcCAuY29udGVudC1yaWdodCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCkgIWltcG9ydGFudDtcbn1cbiA6aG9zdCA6Om5nLWRlZXAgLm14LTc1IHtcbiAgbWFyZ2luLWxlZnQ6IC43NXJlbSFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogLjc1cmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAucHktNzUge1xuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IC43NXJlbSFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnB4LTEge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW0haW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubXItNTAsIC5teC01MCB7XG4gIG1hcmdpbi1yaWdodDogLjVyZW0haW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLjVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYi01MCwgLm15LTUwIHtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51XG57XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEzMXB4LCAxOHB4LCAwcHgpICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNoYXQtc2lkZWJhciAuY2hhdC1zaWRlYmFyLWxpc3Qtd3JhcHBlciB7XG4gICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNpZGViYXItZml4ZWQge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hcHAtY29udGVudCB7XG4gICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcbn0gXG46aG9zdCA6Om5nLWRlZXAgLnBiLTI1LCAucHktMjUge1xuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWwtMjUsIC5teC0yNSB7XG4gIG1hcmdpbi1sZWZ0OiAuMjVyZW0haW1wb3J0YW50O1xufVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmNoYXQtZm9vdGVyXG4gICB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5jaGF0LXdyYXBwZXJcbiAgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LXJpZ2h0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMHB4KSAhaW1wb3J0YW50O1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgLmQtaW5saW5lLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9hcHBsaWNhdGlvbnMvY2hhdC9zdGF0aWMtY2hhdC9zdGF0aWMtY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQztFQUNDLG9DQUFvQztBQUN0QztDQUNDO0VBQ0MsNkJBQTZCO0VBQzdCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7O0VBRUUsb0RBQW9EO0FBQ3REO0FBQ0E7R0FDRyxrQkFBa0I7QUFDckI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7R0FDRyw2QkFBNkI7QUFDaEM7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRTs7SUFFRSw2QkFBNkI7SUFDN0IsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFDQTtFQUNFOztJQUVFLGtDQUFrQztFQUNwQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLG94RkFBb3hGIiwic291cmNlc0NvbnRlbnQiOlsiXG4gOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LXJpZ2h0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KSAhaW1wb3J0YW50O1xufVxuIDpob3N0IDo6bmctZGVlcCAubXgtNzUge1xuICBtYXJnaW4tbGVmdDogLjc1cmVtIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5weS03NSB7XG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW0haW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogLjc1cmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAucHgtMSB7XG4gIHBhZGRpbmctbGVmdDogMXJlbSFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tci01MCwgLm14LTUwIHtcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbSFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAuNXJlbSFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1iLTUwLCAubXktNTAge1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbSFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnVcbntcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTMxcHgsIDE4cHgsIDBweCkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuY2hhdC1zaWRlYmFyIC5jaGF0LXNpZGViYXItbGlzdC13cmFwcGVyIHtcbiAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc2lkZWJhci1maXhlZCB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFwcC1jb250ZW50IHtcbiAgIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xufSBcbjpob3N0IDo6bmctZGVlcCAucGItMjUsIC5weS0yNSB7XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tbC0yNSwgLm14LTI1IHtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbSFpbXBvcnRhbnQ7XG59XG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSB7XG4gIDpob3N0IDo6bmctZGVlcCAuY2hhdC1mb290ZXJcbiAgIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICBib3R0b206IDE3cHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmNoYXQtd3JhcHBlclxuICAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmNvbnRlbnQtcmlnaHQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjpob3N0IDo6bmctZGVlcCAuZC1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 26009:
/*!***************************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/esm/index.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractUserDataWriter": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.AbstractUserDataWriter),
/* harmony export */   "AggregateField": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.AggregateField),
/* harmony export */   "AggregateQuerySnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.AggregateQuerySnapshot),
/* harmony export */   "Bytes": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Bytes),
/* harmony export */   "CACHE_SIZE_UNLIMITED": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.CACHE_SIZE_UNLIMITED),
/* harmony export */   "CollectionReference": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.CollectionReference),
/* harmony export */   "DocumentReference": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.DocumentReference),
/* harmony export */   "DocumentSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.DocumentSnapshot),
/* harmony export */   "FieldPath": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FieldPath),
/* harmony export */   "FieldValue": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FieldValue),
/* harmony export */   "Firestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Firestore),
/* harmony export */   "FirestoreError": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.FirestoreError),
/* harmony export */   "GeoPoint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.GeoPoint),
/* harmony export */   "LoadBundleTask": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.LoadBundleTask),
/* harmony export */   "Query": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Query),
/* harmony export */   "QueryCompositeFilterConstraint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryCompositeFilterConstraint),
/* harmony export */   "QueryConstraint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryConstraint),
/* harmony export */   "QueryDocumentSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryDocumentSnapshot),
/* harmony export */   "QueryEndAtConstraint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryEndAtConstraint),
/* harmony export */   "QueryFieldFilterConstraint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryFieldFilterConstraint),
/* harmony export */   "QueryLimitConstraint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryLimitConstraint),
/* harmony export */   "QueryOrderByConstraint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryOrderByConstraint),
/* harmony export */   "QuerySnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QuerySnapshot),
/* harmony export */   "QueryStartAtConstraint": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.QueryStartAtConstraint),
/* harmony export */   "SnapshotMetadata": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.SnapshotMetadata),
/* harmony export */   "Timestamp": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Timestamp),
/* harmony export */   "Transaction": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.Transaction),
/* harmony export */   "WriteBatch": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.WriteBatch),
/* harmony export */   "_DatabaseId": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._DatabaseId),
/* harmony export */   "_DocumentKey": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._DocumentKey),
/* harmony export */   "_EmptyAppCheckTokenProvider": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._EmptyAppCheckTokenProvider),
/* harmony export */   "_EmptyAuthCredentialsProvider": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._EmptyAuthCredentialsProvider),
/* harmony export */   "_FieldPath": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._FieldPath),
/* harmony export */   "_cast": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._cast),
/* harmony export */   "_debugAssert": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._debugAssert),
/* harmony export */   "_isBase64Available": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._isBase64Available),
/* harmony export */   "_logWarn": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._logWarn),
/* harmony export */   "_validateIsNotUsedTogether": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__._validateIsNotUsedTogether),
/* harmony export */   "addDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc),
/* harmony export */   "aggregateQuerySnapshotEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.aggregateQuerySnapshotEqual),
/* harmony export */   "and": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.and),
/* harmony export */   "arrayRemove": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayRemove),
/* harmony export */   "arrayUnion": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion),
/* harmony export */   "clearIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.clearIndexedDbPersistence),
/* harmony export */   "collection": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection),
/* harmony export */   "collectionGroup": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collectionGroup),
/* harmony export */   "connectFirestoreEmulator": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.connectFirestoreEmulator),
/* harmony export */   "deleteDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteDoc),
/* harmony export */   "deleteField": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.deleteField),
/* harmony export */   "disableNetwork": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.disableNetwork),
/* harmony export */   "doc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.doc),
/* harmony export */   "documentId": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.documentId),
/* harmony export */   "enableIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableIndexedDbPersistence),
/* harmony export */   "enableMultiTabIndexedDbPersistence": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableMultiTabIndexedDbPersistence),
/* harmony export */   "enableNetwork": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.enableNetwork),
/* harmony export */   "endAt": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.endAt),
/* harmony export */   "endBefore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.endBefore),
/* harmony export */   "ensureFirestoreConfigured": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.ensureFirestoreConfigured),
/* harmony export */   "executeWrite": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.executeWrite),
/* harmony export */   "getCountFromServer": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getCountFromServer),
/* harmony export */   "getDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDoc),
/* harmony export */   "getDocFromCache": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocFromCache),
/* harmony export */   "getDocFromServer": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocFromServer),
/* harmony export */   "getDocs": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs),
/* harmony export */   "getDocsFromCache": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocsFromCache),
/* harmony export */   "getDocsFromServer": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocsFromServer),
/* harmony export */   "getFirestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore),
/* harmony export */   "increment": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.increment),
/* harmony export */   "initializeFirestore": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.initializeFirestore),
/* harmony export */   "limit": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.limit),
/* harmony export */   "limitToLast": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.limitToLast),
/* harmony export */   "loadBundle": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.loadBundle),
/* harmony export */   "namedQuery": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.namedQuery),
/* harmony export */   "onSnapshot": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshot),
/* harmony export */   "onSnapshotsInSync": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.onSnapshotsInSync),
/* harmony export */   "or": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.or),
/* harmony export */   "orderBy": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.orderBy),
/* harmony export */   "query": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.query),
/* harmony export */   "queryEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.queryEqual),
/* harmony export */   "refEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.refEqual),
/* harmony export */   "runTransaction": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.runTransaction),
/* harmony export */   "serverTimestamp": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.serverTimestamp),
/* harmony export */   "setDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc),
/* harmony export */   "setIndexConfiguration": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setIndexConfiguration),
/* harmony export */   "setLogLevel": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.setLogLevel),
/* harmony export */   "snapshotEqual": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.snapshotEqual),
/* harmony export */   "startAfter": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.startAfter),
/* harmony export */   "startAt": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.startAt),
/* harmony export */   "terminate": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.terminate),
/* harmony export */   "updateDoc": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc),
/* harmony export */   "waitForPendingWrites": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.waitForPendingWrites),
/* harmony export */   "where": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where),
/* harmony export */   "writeBatch": () => (/* reexport safe */ _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.writeBatch)
/* harmony export */ });
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ 17448);


/***/ })

}]);
//# sourceMappingURL=src_app_content_applications_chat_chats_module_ts.js.map