/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	CardHeader,
	CardHeaderTitle,
	CardHeaderDate,
	CardFooterSchemaActions,
} from '@ithemes/security.dashboard.dashboard';
import { shortenNumber } from '@ithemes/security-utils';
import './style.scss';

function VersionManagement( { card, config } ) {
	const boxes = [
		{
			label: __( 'WordPress Updates', 'it-l10n-ithemes-security-pro' ),
			value: card.data.counts.core,
		},
		{
			label: __( 'Plugin Updates', 'it-l10n-ithemes-security-pro' ),
			value: card.data.counts.plugin,
		},
		{
			label: __( 'Theme Updates', 'it-l10n-ithemes-security-pro' ),
			value: card.data.counts.theme,
		},
		{
			label: __( 'Total Updates', 'it-l10n-ithemes-security-pro' ),
			value: card.data.all,
		},
	];

	return (
		<div className="itsec-card--type-version-management">
			<CardHeader>
				<CardHeaderTitle card={ card } config={ config } />
				<CardHeaderDate card={ card } config={ config } />
			</CardHeader>
			<section className="itsec-card-version-management__updates-section">
				<ul className="itsec-card-version-management__updates">
					{ boxes.map( ( box, i ) => (
						<li
							className="itsec-card-version-management__update"
							key={ i }
						>
							<span className="itsec-card-version-management__update-label">
								{ box.label }
							</span>
							<span className="itsec-card-version-management__update-count">
								{ shortenNumber( box.value ) }
							</span>
						</li>
					) ) }
				</ul>
			</section>
			<CardFooterSchemaActions card={ card } />
		</div>
	);
}

export const slug = 'version-management';
export const settings = {
	render: VersionManagement,
	elementQueries: [
		{
			type: 'width',
			dir: 'max',
			px: 355,
		},
	],
};
