let array = [
    {
        "Name": "000webhost",
        "Title": "000webhost",
        "Domain": "000webhost.com",
        "BreachDate": "2015-03-01",
        "AddedDate": "2015-10-26T23:35:45Z",
        "ModifiedDate": "2017-12-10T21:44:27Z",
        "Description": "In approximately March 2015, the free web hosting provider <a href=\"http://www.troyhunt.com/2015/10/breaches-traders-plain-text-passwords.html\" target=\"_blank\" rel=\"noopener\">000webhost suffered a major data breach</a> that exposed almost 15 million customer records. The data was sold and traded before 000webhost was alerted in October. The breach included names, email addresses and plain text passwords.",
        "DataClasses": [
            "Email addresses",
            "IP addresses",
            "Names",
            "Passwords"
        ],
        "IsVerified": true,
        "IsSensitive": false
    },
    {
        "Name": "8tracks",
        "Title": "8tracks",
        "Domain": "8tracks.com",
        "BreachDate": "2017-06-27",
        "AddedDate": "2018-02-16T07:09:30Z",
        "ModifiedDate": "2019-08-25T08:52:21Z",
        "Description": "In June 2017, the online playlists service known as <a href=\"https://blog.8tracks.com/2017/06/27/password-security-alert/\" target=\"_blank\" rel=\"noopener\">8Tracks suffered a data breach</a> which impacted 18 million accounts. In their disclosure, 8Tracks advised that &quot;the vector for the attack was an employee’s GitHub account, which was not secured using two-factor authentication&quot;. Salted SHA-1 password hashes for users who <em>didn't</em> sign up with either Google or Facebook authentication were also included. The data was provided to Hack Check by whitehat security researcher and data analyst Adam Davies and contained almost 8 million unique email addresses. The complete set of 18M records was later provided by JimScott.Sec@protonmail.com and updated in Hack Check accordingly.",
        "DataClasses": [
            "Email addresses",
            "Passwords"
        ],
        "IsVerified": true,
        "IsSensitive": false
    },
    {
        "Name": "Adobe",
        "Title": "Adobe",
        "Domain": "adobe.com",
        "BreachDate": "2013-10-04",
        "AddedDate": "2013-12-04T00:00:00Z",
        "ModifiedDate": "2013-12-04T00:00:00Z",
        "Description": "In October 2013, 153 million Adobe accounts were breached with each containing an internal ID, username, email, <em>encrypted</em> password and a password hint in plain text. The password cryptography was poorly done and <a href=\"http://stricture-group.com/files/adobe-top100.txt\" target=\"_blank\" rel=\"noopener\">many were quickly resolved back to plain text</a>. The unencrypted hints also <a href=\"http://www.troyhunt.com/2013/11/adobe-credentials-and-serious.html\" target=\"_blank\" rel=\"noopener\">disclosed much about the passwords</a> adding further to the risk that hundreds of millions of Adobe customers already faced.",
        "DataClasses": [
            "Email addresses",
            "Password hints",
            "Passwords",
            "Usernames"
        ],
        "IsVerified": true,
        "IsSensitive": false
    },
    {
        "Name": "AnimeGame",
        "Title": "AnimeGame",
        "Domain": "animegame.me",
        "BreachDate": "2020-02-27",
        "AddedDate": "2020-03-09T05:52:08Z",
        "ModifiedDate": "2020-03-09T05:52:08Z",
        "Description": "In February 2020, the gaming website <a href=\"http://animegame.me/\" target=\"_blank\" rel=\"noopener\">AnimeGame</a> suffered a data breach. The incident affected 1.4M subscribers and exposed email addresses, usernames and passwords stored as salted MD5 hashes. The data was subsequently shared on a popular hacking forum and was provided to Hack Check by <a href=\"https://dehashed.com/\" target=\"_blank\" rel=\"noopener\">dehashed.com</a>.",
        "DataClasses": [
            "Email addresses",
            "Usernames"
        ],
        "IsVerified": true,
        "IsSensitive": false
    },
    {
        "Name": "Artsy",
        "Title": "Artsy",
        "Domain": "artsy.net",
        "BreachDate": "2018-04-01",
        "AddedDate": "2020-05-25T20:59:10Z",
        "ModifiedDate": "2020-05-25T21:08:08Z",
        "Description": "In April 2018, the online arts database <a href=\"https://www.theregister.co.uk/2019/02/11/620_million_hacked_accounts_dark_web/\" target=\"_blank\" rel=\"noopener\">Artsy suffered a data breach which consequently appeared for sale on a dark web marketplace</a>. Over 1M accounts were impacted and included IP and email addresses, names and passwords stored as salted SHA-512 hashes. The data was provided to Hack Check by a source who requested it be attributed to &quot;nano@databases.pw&quot;.",
        "DataClasses": [
            "Email addresses",
            "IP addresses",
            "Names",
            "Passwords"
        ],
        "IsVerified": true,
        "IsSensitive": false
    },
    {
        "Name": "Zynga",
        "Title": "Zynga",
        "Domain": "zynga.com",
        "BreachDate": "2019-09-01",
        "AddedDate": "2019-12-19T04:54:45Z",
        "ModifiedDate": "2020-01-11T00:41:51Z",
        "Description": "In September 2019, game developer <a href=\"https://www.cnet.com/news/words-with-friends-hack-reportedly-exposes-data-of-more-than-200m-players/\" target=\"_blank\" rel=\"noopener\">Zynga (the creator of Words with Friends) suffered a data breach</a>. The incident exposed 173M unique email addresses alongside usernames and passwords stored as salted SHA-1 hashes. The data was provided to Hack Check by <a href=\"https://dehashed.com/\" target=\"_blank\" rel=\"noopener\">dehashed.com</a>.",
        "DataClasses": [
            "Email addresses",
            "Passwords",
            "Phone numbers",
            "Usernames"
        ],
        "IsVerified": true,
        "IsSensitive": true
    }
];
