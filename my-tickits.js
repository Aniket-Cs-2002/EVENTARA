const tabs = document.querySelectorAll('.ticket-tab');

const sections = {
    upcoming: document.getElementById('upcoming'),
    attended: document.getElementById('attended'),
    cancelled: document.getElementById('cancelled')
};


/* =========================================
   ACTIVE TAB
========================================= */

function setActiveTab(name) {

    tabs.forEach((tab) => {

        tab.classList.toggle(
            'active-ticket-tab',
            tab.dataset.tabTarget === name
        );

    });

}

tabs.forEach((tab) => {

    tab.addEventListener('click', () => {

        const target =
            tab.dataset.tabTarget;

        setActiveTab(target);

        if (sections[target]) {

            sections[target].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});


/* =========================================
   DOWNLOAD TICKET
========================================= */

const downloadButton =
    document.getElementById(
        'download-ticket'
    );


if (downloadButton) {

    downloadButton.addEventListener(
        'click',
        () => {

            const text = [
                'EVENTARA TICKET',
                '',
                'Guns N’ Roses Live in Kolkata',
                'Salt Lake Stadium, Kolkata',
                'Sunday, 20 July 2025',
                '6:00 PM onwards'
            ].join('\n');


            const blob =
                new Blob(
                    [text],
                    {
                        type:
                            'text/plain;charset=utf-8'
                    }
                );


            const url =
                URL.createObjectURL(blob);


            const link =
                document.createElement('a');


            link.href = url;

            link.download =
                'eventara-ticket.txt';


            document.body.appendChild(link);

            link.click();

            link.remove();

            URL.revokeObjectURL(url);

        }
    );

}


/* =========================================
   SHARE
========================================= */

const shareButton =
    document.getElementById(
        'share-ticket'
    );


if (shareButton) {

    shareButton.addEventListener(
        'click',
        async () => {

            const title =
                'Guns N’ Roses Live in Kolkata';

            const text =
                'Salt Lake Stadium, Kolkata — Sunday, 20 July 2025 — 6:00 PM onwards.';


            try {

                if (navigator.share) {

                    await navigator.share({
                        title,
                        text
                    });

                }

                else if (navigator.clipboard) {

                    await navigator.clipboard.writeText(
                        `${title}\n${text}`
                    );

                    alert(
                        'Ticket details copied to clipboard.'
                    );

                }

            }

            catch (error) {

                if (
                    error.name !==
                    'AbortError'
                ) {

                    console.error(
                        'Share failed:',
                        error
                    );

                }

            }

        }
    );

}


/* =========================================
   VIEW DETAILS
========================================= */

const detailsButton =
    document.getElementById(
        'view-details-btn'
    );


if (detailsButton) {

    detailsButton.addEventListener(
        'click',
        () => {

            const ticket =
                document.getElementById(
                    'main-ticket'
                );


            if (ticket) {

                ticket.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

            }

        }
    );

}