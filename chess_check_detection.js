isCheck = B => RegExp(`♔${s=`(.{7}|.{11}|.{18}|.{20})`}♞|♞${s}♔|♟(.{2}){4,5}♔|♔${q=`(.{9} )*.{9}`}[♛♜]|[♛♜]${q}♔|[♛♜] *♔|♔ *[♛♜]|[♛♝]${c=`((.{8} )*.{8}|(.{10} )*.{10})`}♔|♔${c}[♛♝]`).test(B.map(e=>e.join``).join`--`)
