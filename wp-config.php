<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'quizzes' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Vg+3vq0<Qssy!J5>C*m!NAv$GC^0~x7bP , rX!WOTGGJ73.A}$?kE#cbw$PgD[v' );
define( 'SECURE_AUTH_KEY',  't5[y54R)BTJm8QPh6v8+,0P]SMvOF~z#_=7H.4ApVV&W]@1Zy|J$:/9_c:W:vcXS' );
define( 'LOGGED_IN_KEY',    ')tvNa`S&k*=O(^<6KRjWunxa,nU#4Sp]4$3l*&):lA+C2St./^w`*=FO(zG8ukRk' );
define( 'NONCE_KEY',        'fCcB8D;Qg][Z?|>n69~`A2=X8z$=g6RYIlAGKug~s=2X1(T7L$j~SrUURD56r?R,' );
define( 'AUTH_SALT',        'Ey,,S[|0UaExi^{J`BWr#M;4H;%0e1^Y>cQ5(t;QayyVAKCQY}=Vz_:h>jGaVGmD' );
define( 'SECURE_AUTH_SALT', '}bn5nFo>%.C~Lw4U;|DYE?qyxtsy5,0rQ[)6cL_C/z.>>_L+0C>oJ|ClZ3U4)qF4' );
define( 'LOGGED_IN_SALT',   'GR6`5fQAa$2ZJjawJqke@~g|m<ykb#IAGO]<rb=`!{6^F-vFwfW#$?VudwSGSzvD' );
define( 'NONCE_SALT',       'VIb i*{phn]FVLBe^Eeor)~0$i@fy~WNZS>OUrYlUqI^_,+k!52vwdm.R97bHMn4' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
